module.exports = function(sequelize, Sequelize)
{
  return sequelize.define('event', {
    eventtypeid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    eventtypename: Sequelize.STRING(60),
  },{
    tableName: 'eventtype',
    timestamps: false,
  });
};
