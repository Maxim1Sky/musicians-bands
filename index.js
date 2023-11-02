const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");

const { db } = require("./db");
// Define associations here

async function main() {
  //await db.sync({ force: true });

  const newMusician = await Musician.create({
    name: "John",
    instrument: "Guitar",
  });
}

main();

module.exports = {
  Band,
  Musician,
  Song,
};
