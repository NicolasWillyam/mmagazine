"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//count connect
const countConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connection: ${numConnections}`);
};

//check overload of connect
const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // maximum number of connections based on number of cores for example
    const maxConnections = numCores * 5;

    console.log("Memory usage: " + memoryUsage / 1024 / 1024 + " MB");
    console.log("Activate connections: ", numConnections);
    if (numConnections > maxConnections) {
      console.log("Maximum number of connections");
    }
  }, _SECONDS); //Monitor every 5 seconds
};
module.exports = { countConnect, checkOverload };
