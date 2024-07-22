const transporter = require("../config/config.mail");
const UserService = require("./user.service");
const { email_addr } = require("../config/index");

class EmailService {
    static sendNotification = async (req, res) => {
        const user = await UserService.getAllUser();
        const mail = user.map((item) => item.email)
        const mailOptions = {
            from: email_addr,
            to : mail,
            subject: "Welcome to our platform",
            html: `test email`
        }

        transporter?.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error)
            } else {
                console.log(`Email sent: ${info.response}`)
            }
        })
    }
}

module.exports = EmailService;