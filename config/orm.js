var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

var orm = {

  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols.toString();
    queryString += ") VALUES (" + printQuestionMarks(vals.length) + ")";
    connection.query(queryString, vals, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: function(table, objColsVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + objToSql(objColsVals);
    queryString += " WHERE " + condition;
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  }

};

module.exports = orm;