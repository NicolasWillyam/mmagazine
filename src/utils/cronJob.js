const cron = require('node-cron');
const EmailService = require('../services/email.service');

class CronJob {
    static sendNotification = cron.schedule('0 7 * * *', (async () => {
        try {
            const task = await EmailService.sendNotification();
    
        } catch(err) {
            console.log(err)
        }
    }), {
        scheduled: false,
        timezone: "Asia/Ho_Chi_Minh"
    });
}


module.exports = CronJob;