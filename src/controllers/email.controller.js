"use strict";

const { SuccessResponse } = require("../core/success.response");
const emailService = require("../services/email.service");

class EmailController {

  static getAllMailUser = async (req, res, next) => {
    new SuccessResponse({
        message: "Get all mail user successfully!",
        metadata: await emailService.getAllMailUser(req, res),
    }).send(res);
  }

  static sendNotification = async(req, res, next) => {
    new SuccessResponse({
        message: "Email sent successfully!",
        metadata: await emailService.sendNotification(req, res),
    }).send(res);
  }
}

module.exports = EmailController;