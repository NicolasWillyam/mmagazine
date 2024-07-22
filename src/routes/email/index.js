"use strict";

const express = require("express");
const EmailController = require("../../controllers/email.controller");
const router = express.Router();

router.post("/notification", EmailController.sendNotification);
router.get("/notification", (req, res) => {
    return res.send({
        status: "success",
        message: "Email sent successfully!",
    })
});

module.exports = router;
