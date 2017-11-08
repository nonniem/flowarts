const express = require("express");
const pictureRoute = express.Router();
const Picture = require("../models/picture")

pictureRoute.get("/", (req, res) => {
        Picture.find(req.query, (err, thing)=>{
            if(err) return res.status(500).send(err);
            return res.send(thing);
        });
});

pictureRoute.post("/", (req, res) => {
        const newPicture = new Picture(req.body);
        newPicture.save((err, savedImage) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(savedImage);
        });
});

pictureRoute.get("/:id/", (req, res) => {
    Picture.findById(req.params.id, (err, image) => {
        res.send(image);
    });
});

pictureRoute.delete("/:id/", (req, res) => {
    Picture.findByIdAndRemove(req.params.id, (err, image) => {
        if (err) return res.status(500).send(err);
        res.send(image);
    })
});

module.exports = pictureRoute;
