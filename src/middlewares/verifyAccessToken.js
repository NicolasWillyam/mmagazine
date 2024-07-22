"use strict";

const { HEADER } = require("../constant");
const {
  AuthFailureError,
  ForbiddenError,
  ErrorResponse,
} = require("../core/error.response");
const KeyStoreService = require("../services/keyToken.service");
const verifyJWT = require("../utils/verifyJWT");

const verifyAccessToken = async (req, res, next) => {
  // check user id
  const userId = req.headers[HEADER.CLIENT_ID];
  if (!userId) throw new AuthFailureError("Invalid request");

  //verify keyStore if user exists
  const keyStore = await KeyStoreService.findByUserId(userId);
  if (!keyStore) throw new AuthFailureError("Invalid request");

  const accessToken = req.headers[HEADER.AUTHORIZATION].split(" ")[1];
  // check bearer token
  if (!accessToken.startswith("Bearer "))
    throw new AuthFailureError("Unauthorized");

  // check access token
  if (!accessToken) throw new AuthFailureError("Invalid request");

  // check user
  const decodeUser = await verifyJWT(accessToken, keyStore.publicKey);
  if (!userId || userId !== decodeUser.userId)
    throw new AuthFailureError("Invalid user");

  // set request parameters
  req.accessToken = accessToken;
  req.keyStore = keyStore;
  req.roles = decodeUser.roles;

  return next();
};

module.exports = verifyAccessToken;
