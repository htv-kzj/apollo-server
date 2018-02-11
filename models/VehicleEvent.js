module.exports = function(sequelize, Sequelize)
{
  return sequelize.define('vehicleEvent', {
    vehicleeventid: {
      type: Sequelize.STRING(60),
      primaryKey: true,
    },
    vehicleid: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.vehicle,
        key: 'vehicleid',
      }
    },
    latitude: Sequelize.FLOAT(17),
    longitude: Sequelize.FLOAT(17),
    starttime: Sequelize.STRING(60),
    endtime: Sequelize.STRING(60),
    createdatetime: Sequelize.STRING(60),
    heading: Sequelize.FLOAT(4),
    eventtypeid: Sequelize.INTEGER,
    streetspeed: Sequelize.INTEGER,
    location: Sequelize.STRING(60),
    distance: Sequelize.FLOAT(8),
  },{
    tableName: 'vehicleevent',
    timestamps: false,
  });
};
