const express = require("express");
const pictures = express.Router();

let array = [];

pictures.get("/", (req, res) => {
    res.send(array)
});

pictures.post("/", (req, res) => {
    array.push(req.body);
    res.send(req.body);
})

pictures.delete("/:id/", (req, res) => {
    
})
