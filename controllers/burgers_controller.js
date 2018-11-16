var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function(result) {
    console.log("added burger: " + req.body.burger_name);
    console.log(" and id is " + result.insertId);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("*", function(req, res) {
  res.redirect("/index");
});

module.exports = router;