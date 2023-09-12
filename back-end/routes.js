const express = require("express");
const router = express.Router();
const Schema = require("./Schema");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


