import { makeExecutableSchema } from 'graphql-tools';

import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {
  userQueries,
} from './collections/Data/types';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
    }),
  }),
});
