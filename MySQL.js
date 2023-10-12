const mysql = require("mysql2");

class MySQL {
  constructor(config) {
    this.config = config;
    this.connect();
  }

  connect() {
    this.connection = mysql.createConnection(this.config);
    this.connection.connect((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Connected to the MySQL server.");
      }
    });
  }

  disconnect() {
    this.connection.end((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Disconnected from the MySQL server.");
      }
    });
  }
}

module.exports = MySQL;
