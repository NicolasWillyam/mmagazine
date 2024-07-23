const transporter = require("../config/config.mail");
const UserService = require("./user.service");
const { email_addr } = require("../config/index");

class EmailService {

    static getAllMailUser = async () => {
        const user = await UserService.getAllUser();
        if(!user) {
            return new Error("Error: User not found")
        }
        const mail = user.map((item) => item.email)
        return mail
    }
    static sendMailWelcome = async ({mail}) => {
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