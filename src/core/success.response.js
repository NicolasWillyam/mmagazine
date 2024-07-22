"use strict";

const { StatusCodes, ReasonPhrases } = require("../utils/httpStatusCode");

class SuccessResponse {
  constructor({
    message = ReasonPhrases.OK,
    statusCode = StatusCodes.OK,
    metadata = {},
  }) {
    this.message = message;
    this.status = statusCode;
    this.metadata = metadata;
  }
  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class Ok extends SuccessResponse {
  constructor(message, metadata = {}) {
    super({ message, metadata });
  }
}

class Created extends SuccessResponse {
  constructor({
    options = {},
    message = ReasonPhrases.CREATED,
    statusCode = StatusCodes.CREATED,
    metadata = {},
  }) {
    super({ message, metadata, statusCode });
    this.options = options;
  }
}

module.exports = {
  SuccessResponse,
  Ok,
  Created,
};
