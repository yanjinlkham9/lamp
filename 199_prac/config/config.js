require("dotenv").config();
devel = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: 8000,
  dialect: "mysql",
};

module.exports = { devel };
