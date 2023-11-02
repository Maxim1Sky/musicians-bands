const { db, Sequelize, DataTypes, Model } = require("../db");

// TODO - define the Band model

class Band extends Model {}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Band",
    freezeTableName: true,
  }
);

module.exports = {
  Band,
};
