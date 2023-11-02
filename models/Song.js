const { db, Sequelize, DataTypes, Model } = require("../db");

// TODO - define the Song model

const Song = db.define(
  "Song",
  {
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER,
  },
  {
    freezeTableName: true,
  }
);

module.exports = {
  Song,
};
