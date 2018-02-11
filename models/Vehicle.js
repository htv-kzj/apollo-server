module.exports = function(sequelize, Sequelize)
{
  return sequelize.define('vehicle', {
    vehicleid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    lastknowneventid: Sequelize.INTEGER,
    displayname: Sequelize.INTEGER,
  }, {
    tableName: 'vehicle',
    timestamps: false,
  });
};
