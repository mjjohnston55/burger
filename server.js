var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "day_planner_db"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  