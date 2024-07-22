require('dotenv').config();
const port=process.env.PORT;
const dev_db_name=process.env.DEV_DB_NAME;
const session_secret=process.env.SESSION_SECRET;
const jwt_secret=process.env.JWT_SECRET;
const auth_user=process.env.AUTH_USER;
const auth_pass=process.env.AUTH_PASS;
const email_addr=process.env.EMAIL_ADDR;
const email_host=process.env.EMAIL_HOST;
const email_port=process.env.EMAIL_PORT;
const uri=process.env.URI;
module.exports = {
    port,
    dev_db_name,
    session_secret,
    jwt_secret,
    auth_user,
    auth_pass,
    email_addr,
    email_host,
    email_port,
    uri,
};