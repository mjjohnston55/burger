var orm = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(burgers){
        console.log(burgers);
        res.render("index", {burgers});
    });
});

router.post("/burgers/create", function(req, res){
    burger.insertOne(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res){
    burger.updateOne(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});