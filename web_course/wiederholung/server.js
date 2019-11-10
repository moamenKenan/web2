// import 
var express = require('express');
// execute : 
var app = express();


app.get("/" , function(req, res){
    res.send("hello kenan" );
}); 

app.get("/kanan", function(req, res){
    res.send("hallo i am kenan");
});

app.listen("3000", function(){
    console.log('server has started ');
});