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
    }),
  },
  events: {
    type: new GraphQLList(EventType),
    resolve: resolver(models.event),
  },
  vehicleEvents: {
    type: new GraphQLList(VehicleEventType),
    resolve: (source, args) => {
      let limit = 9999;
      if (args.limit) {
        limit = args.limit;
        delete args.limit;
      }
      if (args.order) {
        const order = args.order;
        delete args.order;
        return models.vehicleEvent.findAll({
          where: args,
          order: [
            [endtime, order],
          ],
          limit: limit,
        });
      }
      return models.vehicleEvent.findAll({
        where: args,
        limit: limit,
      });
    },
  },
};

export {
  Queries,
};
