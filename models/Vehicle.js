module.exports = function(sequelize, Sequelize)
{
  return sequelize.define('vehicle', {
    vehicleid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    createdatetime: Sequelize.STRING,
    lastknowneventid: Sequelize.INTEGER,
    displayname: Sequelize.INTEGER,
  }, {
    tableName: 'vehicle',
    timestamps: false,
  });
};
