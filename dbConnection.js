const db = require("knex")({
  client: "pg",
  connection: {
    //connectionString: config.DATABASE_URL,
    host: "HOSTNAME",
    port: "PORT",
    user: "USERNAME",
    database: "DATABASENAME",
    password: "PASSWORD",
    ssl: true,
  },
});

module.exports = db;
