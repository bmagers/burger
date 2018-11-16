var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// selectAll, insertOne, updateOne
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

module.exports = router;