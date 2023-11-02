const { db, Sequelize, DataTypes, Model } = require("../db");

// TODO - define the Musician model
class Musician extends Model {}

Musician.init(
  {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
  },
  {
    sequelize: db,
    tableName: "Musician",
    freezeTableName: true,
  }
);

module.exports = {
  Musician,
};
