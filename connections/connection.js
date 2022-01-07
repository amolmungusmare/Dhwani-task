require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
});
knex.schema
  .createTable("User", (table) => {
    table.string("userName");
    table.string("Password");
  })
  .then((msg) => {
    console.log("user Table is created...");
  })
  .catch((err) => {
    console.log("User table is already exist");
  });

knex.schema
  .createTable("State", (table) => {
    table.string("stateName");
  })
  .then((msg) => {
    console.log("state table created");
  })
  .catch((err) => {
    console.log("state table already exist");
  });

knex.schema
  .createTable("Districts", (table) => {
    table.string("districtName");
  })
  .then((msg) => {
    console.log("district table is created...");
  })
  .catch((err) => {
    console.log("district table already exist");
  });

knex.schema
  .createTable("Child", (table) => {
    table.increments("ID");
    table.string("childName");
    table.string("fatherName");
    table.string("motherName");
    table.string("dataOfBirth");
    table.string("Sex");
    table.string("stateName");
    table.string("districtName");
  })
  .then((msg) => {
    console.log("child Table is created...");
  })
  .catch((err) => {
    console.log("child table already exist");
  });
module.exports = knex;
