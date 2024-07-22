"use strict";

const JWT = require("jsonwebtoken");
const { ForbiddenError } = require("../core/error.response");

const verifyJWT = async (token, keySecret) => {
  try {
    return await JWT.verify(token, keySecret);
  } catch (err) {
    console.log("error: " + err);
    return new ForbiddenError("Forbidden error, please try again!");
    // return err;
  }
};

module.exports = verifyJWT;
