var express  = require("express"),
    mongooe  = require("mongoose");

    mongooe.connect('mongodb://localhost/my_data', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    var schema = mongooe.Schema({
        name :String,
        age : Number
    });

    var person = new mongooe.model("neu", schema);

    var kenan = new person({
        name: "moumen",
        age: 22
    });
    kenan.save(function(err, x){
        if(err){
            console.log(err)
        }else{
            console.log(x)
        }
    });