var orm = require("../config/orm.js");

var burgers = {

  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // table, objColVals, condition, cb)
  updateOne: function(objColsVals, condition, cb) {
    orm.updateOne("burgers", objColsVals, condition, function(res) {
      cb(res);
    });
  }

};

module.exports = burgers;