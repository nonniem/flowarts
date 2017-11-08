const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4444;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use("/pictures", require("./routes/pictures"));

mongoose.connect("mongodb://localhost/pictures", (err) => {
    if (err) throw err;
    console.log("connected to picture database attempt to upload")
});

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
