
var express = require('express');
var app = express();

// this is also correct : 
//var app = require('express')();

app.use(express.static('public'));
// home instade of home.ejs : 
app.set('view engine' , 'ejs');

app.get('/' , function(req, res){
    res.render('home');
});

app.get('/dogs/:id' , function(req, res){
    var id = req.params.id;
    res.render('dogs',{ id : id});
});


app.listen('3000', function(){
    console.log('==================');
    console.log('sever had started');
    console.log('===================');
});
