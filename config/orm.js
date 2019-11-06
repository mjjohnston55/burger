var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT ?? FROM ??";

      connection.query(queryString, [tableInput, cb], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(tableInput, value, cb) {
      var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ??";

      connection.query(queryString, [tableInput, value], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne: function(tableInput, id, cb) {
        var queryString = "UPDATE ?? SET dvoured = true WHERE id = ??";
  
        connection.query(queryString, [tableInput, id], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
  };

  module.exports = orm;