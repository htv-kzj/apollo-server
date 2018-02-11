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
      order: [
        [{ model: models.vehicleEvent, as: 'events' }, 'endtime', 'desc'],
      ]
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
};

export {
  Queries,
};
