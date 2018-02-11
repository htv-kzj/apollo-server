import {
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import moment from 'moment';
import { random, date, address } from 'faker';
import { resolver } from 'graphql-sequelize';
import models from '../../../../../models'
import {
  VehicleType,
  EventType,
  VehicleEventType,
  PredictionsType,
} from './types';

let currentDate = 0;

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
    type: new GraphQLList(PredictionsType),
    resolve: () => models.predictions.findAll()
      .then(data => {
        const returnable = data.map(vals => {
          const newObj = {};
          Object.keys(vals.dataValues).forEach(key => {
            newObj[key] = vals.dataValues[key];
          })
          newObj.summation = '40.18';
          return newObj;
        })
        return returnable;
      })
  },
};

export {
  Queries,
};
