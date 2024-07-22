"use strict";

const keyTokenModel = require("../models/keyToken.model");

class KeyStoreService {
  static createKeyToken = async ({
    userId,
    privateKey,
    publicKey,
    refreshToken,
  }) => {
    try {
      const keys = await keyTokenModel.create({
        userId,
        privateKey,
        publicKey,
        refreshToken,
      });

      return keys ? keys.publicKey : null;
    } catch (error) {
      console.log("error creating key token", error);
      return error;
    }
  };

  static findByUserId = async (userId) => {
    try {
      const token = await keyTokenModel
        .findOne({ userId: userId })
        .lean()
        .exec();
      return token;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };

  static updateKeyToken = async ({
    userId,
    oldRefreshToken = null,
    refreshToken,
  }) => {
    try {
      const options = { upsert: true, new: true };
      if (oldRefreshToken) {
        await keyTokenModel
          .updateOne(
            { userId: userId },
            {
              refreshToken: refreshToken,
              $addToSet: { refreshTokenUsed: oldRefreshToken },
            },
            options
          )
          .exec();
      } else
        await keyTokenModel
          .updateOne(
            { userId: userId },
            {
              refreshToken: refreshToken,
            },
            options
          )
          .exec();
      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  };

  static findByRefreshToken = async (refreshToken) => {
    return await keyTokenModel
      .findOne({
        refreshToken: refreshToken,
      })
      .exec();
  };

  static findByRefreshTokenUsed = async (refreshToken) => {
    return await keyTokenModel
      .findOne({
        refreshTokenUsed: refreshToken,
      })
      .exec();
  };

  static removeAllTokens = async (userId) => {
    return await keyTokenModel
      .updateOne(
        { userId: userId },
        {
          refreshTokenUsed: [],
          refreshToken: [],
        }
      )
      .exec();
  };
}

module.exports = KeyStoreService;
