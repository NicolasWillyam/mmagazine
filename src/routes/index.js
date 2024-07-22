"use strict";

const express = require("express");
const router = express.Router();

router.use("/v1/api", require("./access"));
router.use("/v1/api/email", require("./email"));

module.exports = router;
