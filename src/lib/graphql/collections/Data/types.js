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
    vehicleid: {
      type: new GraphQLNonNull(GraphQLID),
    },
    creationdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastupdatedate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastknowneventid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    displayname: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'Event Type Definition',
  fields: () => ({
    eventtypeid: {
      type: new GraphQLNonNull(GraphQLID),
    },
    eventtypename: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

const VehicleEventType = new GraphQLObjectType({
  name: 'VehicleEventType',
  description: 'Vehicle Event Type definition',
  fields: () => ({
    vehicleeventId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    vehicleid: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    latitude: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    starttime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    endtime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    distance: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    creationdate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    heading: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    eventtypeid: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    streetspeed: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

export {
  VehicleType,
  EventType,
  VehicleEventType,
};
