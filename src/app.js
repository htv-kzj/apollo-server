import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import myGraphQLSchema from './lib/graphql';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors())

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (r, res) => res.sendStatus(200));

app.listen(PORT);
