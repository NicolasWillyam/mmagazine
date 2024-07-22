"use strict";

const userModel = require("../models/user.model");

const selectOptions = {
  email: 1,
  password: 1,
  name: 1,
  verify: 1,
  roles: 1,
  oauthId: 1,
  oauthStrategy: 1,
};

class UserService {

  static getAllUser = async () => {
    return await userModel.find().lean().exec();
  }

  static findByEmail = async ({ email, select = selectOptions }) => {
    return await userModel
      .findOne({ email: email })
      .select(select)
      .lean()
      .exec();
  };

  static findByUserId = async ({ userId, select = selectOptions }) => {
    return await userModel
      .findOne({ _id: userId })
      .select(select)
      .lean()
      .exec();
  };

  static createUser = async ({
    name,
    email,
    password,
  }) => {
    return await userModel.create({
      name,
      email,
      password,
    });
  };
}

module.exports = UserService;
