const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const { sendNotification } = require("./utils/cronJob")
const app = express();
require("dotenv").config();

// init middleware
app.use(morgan("dev"));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000, //payload less than 100kb should not be compressed
    filter: (req, res) => {
      // don't compress responses with this request header
      if (req.headers["x-no-compression"]) {
        return false;
      }
      // fallback to standard filter function
      return compression.filter(req, res);
    },
  })
);
app.use(helmet());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_SECRET],
  })
);

//cors
const whitelist = ["http://localhost:3003", "http://127.0.0.1:3003"]; //white list consumers
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "x-client-id",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers",
    "withCredentials",
    "credentials",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// init database
require("./database/init.mongodb");

//routes
app.use("/", require("./routes"));


// start cron job
sendNotification.start()
// handle error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
