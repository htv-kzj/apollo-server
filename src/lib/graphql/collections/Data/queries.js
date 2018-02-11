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
import Promise from 'bluebird';

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
    }).then((vehicles) => Promise.map(vehicles, (vehicle) => {
      vehicle.lastknowndata = [];
      vehicle.lastknowndata[0] = {};
      if (vehicle.events.length) {
        vehicle.lastknowndata[0].longitude = vehicle.events[0].longitude;
        vehicle.lastknowndata[0].latitude = vehicle.events[0].latitude;
        vehicle.lastknowndata[0].location = vehicle.events[0].location;
        if (vehicle.events[0].vehicleeventid == vehicle.lastknowneventid) {
          console.log('Vehicle Events EventTypeId:', vehicle.events[0].eventtypeid)
          switch (vehicle.events[0].eventtypeid) {
            case 1:
              vehicle.lastknowndata[0].status = 'GPS Location';
              break;
            case 90:
              vehicle.lastknowndata[0].status = 'Power On';
              break;
            case 91:
              vehicle.lastknowndata[0].status = 'Power Off';
              break;
            case 92:
              vehicle.lastknowndata[0].status = 'Motion Stop';
              break;
            default:
              vehicle.lastknowndata[0].status = 'Unknown';
              break;
          }
          return vehicle;
        }
        vehicle.lastknowndata[0].status = 'Unknown';
      }
      return vehicle;
    })),
  },
  events: {
    type: new GraphQLList(EventType),
    resolve: resolver(models.event),
  },
  vehicleEvents: {
    type: new GraphQLList(VehicleEventType),
    resolve: (source, args) => models.vehicleEvent.findAll({
      where: args,
      order: [
        [endtime, order],
      ],
    }),
  },
  predictions: {
    type: new GraphQLList(PredictionsType),
    resolve: resolver(models.predictions),
  }
};

export {
  Queries,
};
