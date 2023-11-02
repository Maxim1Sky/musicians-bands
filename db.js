const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

// TODO - create the new sequelize connection

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
  logging: false,
  define: {
    timestamps: false,
  },
});

//db.authenticate(); // run it once

module.exports = {
  db,
  Sequelize,
  DataTypes,
  Model,
};

// npm init -y
// npm i sequelize sqlite3
// mkdir src db <-- folder, you make connection.js and the databse in there
// FOR CREATED DATABSE
// clears/resets the database each time you run it. Used for testing. Inside the async main function
//await db.sync({ force: true });
// console.log(JSON.stringify(variable_name, null, 2));
