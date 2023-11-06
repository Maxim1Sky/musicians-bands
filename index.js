const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");

const { db } = require("./db");
// Define associations here
Band.hasMany(Musician);
Musician.belongsTo(Band);

Song.belongsToMany(Band, { through: "songBand" });
Band.belongsToMany(Song, { through: "songBand" });

module.exports = {
  Band,
  Musician,
  Song,
};
