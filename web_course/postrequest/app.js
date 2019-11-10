var express = require('express');
var app = express();
var bodyparser = require('body-parser'); 
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine', 'ejs'); 
app.use(express.static('public'))

// info-list 
var infolist = ['hallo this is the first information', 'these information are stored in an array']; 

// get route : 
app.get('/', function(req , res){
    res.render('home');
});

app.get('/info', function(req, res){
    res.render('info', {infolist:infolist});
});

// post methode : 
app.post('/addinfo' , function(req, res){
    var information = req.body.information;
    infolist.push(information);
    // reload the page 
    res.redirect('/info');
});

app.listen('3000', function(){
    console.log('=======================');
    console.log('server had started');
    console.log('========================');
});


