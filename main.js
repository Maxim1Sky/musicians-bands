const { Band, Musician, Song } = require("./index");
const { db } = require("./db");

async function main() {
  await db.sync({ force: true });

  const imgaBand = await Band.create({ name: "Imagine Dragons", genre: "Pop" });
  const allMusi = await Musician.bulkCreate([
    { name: "John First", instrument: "guitar" },
    { name: "Alex Pereira", instrument: "Fists" },
    { name: "Islam Makhachev", instrument: "Grappling" },
    { name: "John", instrument: "Guitar" },
  ]);
  const coolSong = await Song.create({
    title: "Far Away",
    year: 2009,
    length: 198,
  });

  //await slythHouse.setUsers([malfoy, tom]);
  await imgaBand.setMusicians(allMusi);

  const res = await Band.findByPk(1, { include: Musician });

  console.log(JSON.stringify(res, null, 2));
}

main();
