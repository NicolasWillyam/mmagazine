"use strict";

const { HEADER } = require("../constant");
const {
  AuthFailureError,
  ForbiddenError,
  ErrorResponse,
} = require("../core/error.response");
const KeyStoreService = require("../services/keyToken.service");
const verifyJWT = require("../utils/verifyJWT");

const verifyRefreshToken = async (req, res, next) => {
  const refreshToken = req.cookies?.jwt;
  console.log("refreshToken", refreshToken);
  if (!refreshToken) throw new ForbiddenError("Forbidden error!");

  // check if refresh token has been used previously
  const foundRefreshTokenUsed = await KeyStoreService.findByRefreshTokenUsed(
    refreshToken
  );
  console.log("foundRefreshTokenUsed", foundRefreshTokenUsed);
  if (foundRefreshTokenUsed) {
    console.log("refresh token used");
    res.clearCookie("jwt", { httpOnly: true });
    await KeyStoreService.removeAllTokens(foundRefreshTokenUsed.userId);
    throw new ForbiddenError("Forbidden error!");
  }

  // get keyStore by refreshToken
  const keyStore = await KeyStoreService.findByRefreshToken(refreshToken);
  if (!keyStore) {
    res.clearCookie("jwt", { httpOnly: true });
    throw new ForbiddenError("Forbidden error!");
  }
  // check if refresh token is valid
  await verifyJWT(refreshToken, keyStore.privateKey);

  req.refreshToken = refreshToken;
  req.keyStore = keyStore;
  return next();
};

module.exports = verifyRefreshToken;
