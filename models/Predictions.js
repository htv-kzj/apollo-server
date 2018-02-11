module.exports = function(sequelize, Sequelize)
{
  return sequelize.define('predictions', {
    original_time: {
      type: Sequelize.String(60),
      primaryKey: true,
    },
    predicted_time: Sequelize.STRING(60),
    difference: Sequelize.STRING(20),
  }, {
    tableName: 'predictions',
    timestamps: false,
  });
};
