"user strict";

const mongoose = require("mongoose");
const {
  db: { host, port, name },
} = require("../config/config.mongodb");
const { uri } = require("../config/index");
const connectString = uri || `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    mongoose.set("debug", { color: true });
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log("Connect database successfully!");
        // count number of connections ->
        // countConnect();
      })
      .catch((err) => console.log("Error connecting: ", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
