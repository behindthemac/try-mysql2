const mysql = require("mysql2");

class MySQL {
  constructor(config) {
    this.config = config;
  }
}

module.exports = MySQL;
