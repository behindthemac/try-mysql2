const MySQL = require("./MySQL");

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

const mysql = new MySQL(config);

mysql.query("SHOW DATABASES;");

mysql.disconnect();
