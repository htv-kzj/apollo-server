import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {
  Queries,
} from './collections/Data/queries';


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...Queries,
    }),
  }),
});
