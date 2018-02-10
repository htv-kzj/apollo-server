import { makeExecutableSchema } from 'graphql-tools';
import Saturn from 'saturn';

const saturn = new Saturn(`${__dirname}/collections`);
const schema = makeExecutableSchema(saturn.makeSchema());
export default schema;
// import {
//   GraphQLSchema,
//   GraphQLObjectType,
// } from 'graphql';
//
// import {
//   userQueries,
// } from './collections/test';
//
// export default new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//       ...userQueries,
//     }),
//   }),
// });
