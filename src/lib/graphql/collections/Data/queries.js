import {
  GraphQLList,
} from 'graphql';
import { random, date, address } from 'faker';
import { resolver } from 'graphql-sequelize';
import models from '../../../../../models'
import {
  VehicleType,
  EventType,
  VehicleEventType,
} from './types';

console.log(models);

const Queries = {
  vehicles: {
    type: new GraphQLList(VehicleType),
    resolve: resolver(models.vehicle),
  },
  events: {
    type: new GraphQLList(EventType),
    resolve: resolver(models.event),
  },
  vehicleEvents: {
    type: new GraphQLList(VehicleEventType),
    resolve: resolver(models.vehicleEvent),
  },
};

export {
  Queries,
};
