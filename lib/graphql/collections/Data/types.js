import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const VehicleType = new GraphQLObjectType({
  name: 'VehicleType',
  description: 'Vehicle type definition',
  fields: () => ({
    vehicleId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    creationDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastUpdateDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastKnownEventId: {
      type: new GraphQLNonNull(GraphQLString),
    },
    displayName: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'Event Type Definition',
  fields: () => ({
    eventTypeId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    eventTypeName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

const VehicleEventType = new GraphQLObjectType({
  name: 'VehicleEventType',
  description: 'Vehicle Event Type definition',
  fields: () => ({
    vehicleEventId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    vehicleId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    latitude: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    startTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    endTime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    distance: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    creationDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    heading: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    eventTypeId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    streetSpeed: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

export {
  VehicleType,
  EventType,
  VehicleEventType,
};
