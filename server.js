const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const settings = require('./settings.js');
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(settings.db, (err) => {
    if (err) throw err;
    console.log("connected to picture database attempt to upload")
});

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.use("/pictures", require("./routes/pictures"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(settings.port, ()=>{
    console.log(`app is listening on port ${settings.port}`);
});
