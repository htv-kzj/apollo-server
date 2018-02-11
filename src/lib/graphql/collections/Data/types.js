import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';

const VehicleType = new GraphQLObjectType({
  name: 'VehicleType',
  description: 'Vehicle type definition',
  fields: () => ({
    vehicleid: {
      type: new GraphQLNonNull(GraphQLID),
    },
    createdatetime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastupdatedatetime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastknowneventid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    displayname: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    events: {
      type: new GraphQLList(VehicleEventType),
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
    vehicleeventid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    vehicleid: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    starttime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    endtime: {
      type: new GraphQLNonNull(GraphQLString),
    },
    distance: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    createdatetime: {
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

const PredictionsType = new GraphQLObjectType({
  name: 'PredictionsType',
  description: 'prediction type definition',
  fields: () => ({
    original_time: {
      type: new GraphQLNonNull(GraphQLString),
    },
    predicted_time: {
      type: new GraphQLNonNull(GraphQLString),
    },
    difference: {
      type: new GraphQLNonNull(GraphQLString),
    },
  })
})

export {
  VehicleType,
  EventType,
  VehicleEventType,
  PredictionsType,
};
