"use strict";

const JWT = require("jsonwebtoken");
const {
  REFRESH_TOKEN_EXPIRATION,
  ACCESS_TOKEN_EXPIRATION,
} = require("../constant");

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // generate access token
    const accessToken = JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: ACCESS_TOKEN_EXPIRATION,
    });

    // generate refresh token
    const refreshToken = JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: REFRESH_TOKEN_EXPIRATION,
    });

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) console.log("error verifying access token: ", err);
      console.log("decode: ", decode);
    });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("error generate token: ", error);
  }
};

module.exports = { createTokenPair };
