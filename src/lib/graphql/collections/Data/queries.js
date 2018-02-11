import {
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import { random, date, address } from 'faker';
import { resolver } from 'graphql-sequelize';
import models from '../../../../../models'
import {
  VehicleType,
  EventType,
  VehicleEventType,
  PredictionsType,
} from './types';

console.log(models);

const Queries = {
  vehicles: {
    type: new GraphQLList(VehicleType),
    args: {
      vehicleid: { type: GraphQLInt },
    },
    resolve: (source, args) => models.vehicle.findAll({
      where: args,
      include: {
        model: models.vehicleEvent,
        as: 'events',
      },
    }),
  },
  events: {
    type: new GraphQLList(EventType),
    resolve: resolver(models.event),
  },
  vehicleEvents: {
    type: new GraphQLList(VehicleEventType),
    resolve: resolver(models.vehicleEvent),
  },
  predictions: {
    ype: new GraphQLList(PredictionsType),
    resolve: resolver(models.predictions),
  }
};

export {
  Queries,
};
