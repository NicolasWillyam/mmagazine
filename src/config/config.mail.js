const nodemailer = require('nodemailer');
const { auth_user, auth_pass, email_host, email_port } = require('../config/index');

const transporter = nodemailer.createTransport({
    host: email_host,
    port: email_port,
    secure: true,
    auth: {
        user: auth_user,
        pass: auth_pass
    }
})

module.exports = transporter