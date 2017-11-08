const mongoose = require("mongoose");
const Schema = mongoose.Schema

const pictureSchema = new Schema({

        title: {type: String, required: true},
        description: {type: String},
        imgUrl: {type: String, required: true}

})

module.exports = mongoose.model("Picture", pictureSchema);
