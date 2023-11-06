const { Band, Musician, Song } = require("./index");
const { db } = require("./db");

async function main() {
  await db.sync({ force: true });

  const imgaBand = await Band.create({ name: "Imagine Dragons", genre: "Pop" });
  const fewBands = await Band.bulkCreate([
    { name: "Driving Birds", genre: "Awesoem genre" },
    { name: "The North Devil", genre: "Rap" },
  ]);

  const allMusi = await Musician.bulkCreate([
    { name: "John First", instrument: "guitar" },
    { name: "Alex Pereira", instrument: "Fists" },
    { name: "Islam Makhachev", instrument: "Grappling" },
    { name: "John", instrument: "Guitar" },
  ]);

  const coolSongs = await Song.bulkCreate([
    { title: "Far Away", year: 2009, length: 198 },
    { title: "Web In the Sky", year: 2017, length: 155 },
  ]);
  const farSong = await Song.findByPk(1);

  //await slythHouse.setUsers([malfoy, tom]); <--- Help
  //await theChosenOne.setProfessors(alProf);
  await imgaBand.setMusicians(allMusi); // <---- One-To-Mane, one band and many musicians

  await farSong.setBands(fewBands); // <---- Many-To-Many
  await imgaBand.setSongs(coolSongs); // imagBand has those 'coolSongs, but farSong also belongs to 'fewBands' (doesn't really makes sense, but still)
  // You can remove this ^ line, it doesn't really makes

  // PRINT STUFF
  //const bandWithMusicians = await Band.findByPk(1, { include: Musician });
  const songToBands = await Song.findByPk(1, { include: Band });
  const imagBandSongs = await imgaBand.getSongs(); // <---- useful thing

  console.log(JSON.stringify(imagBandSongs, null, 2));
}

main();
