var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.all("burgers", function(results){
            cb(results);
        })
    },
    insertOne: function(value, cb){
        orm.insertOne('burgers', value, cb);
    },
    updateOne: function(id, cb){
        orm.updateOne('burger', id, cb);
    }
};

module.exports = burger;