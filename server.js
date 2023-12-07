const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();
const admin = require("./routers/admin");
const config = require("./utils/config");
const errorHandler = require("./middleware/error");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.set("view engine", "ejs");
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("*", function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});
app.post("*", function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use("/tarvixxx", express.static("adminpublic"), admin);
app.use(errorHandler);
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection
  .once("open", () => {
    console.log("Database is up");
  })
  .on("error", () => {
    console.log("Error connecting to database");
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Listening on " + process.env.PORT));
