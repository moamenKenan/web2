var  express = require("express");
var app = express();




app.get('/',function(req, res){
    console.log("hallo ");
    res.send("hallo kenan");
});

app.get('/:x/:y', function(req, res){
    var x = req.params.x;
    var y = req.params.y;
    res.send(' hallo you are on the page : ' + x + '/'+ y+  '.com ');
});

app.get('*', function(req , res){
    res.send('this page is not found');
});


app.listen('1000', function(){
    console.log('server starts....');
});

/*
1 - * ist für die nicht definierte anfragen 
2 - die reihnefolge ist wichtig (wenn * am anfang ist wire keine anfrage ausgeführt)
wenn die anfrage mit einer definierten anfrage übereinstimmt wird get ausgeführt 
und die suche hört an dieser stelle auf.
3 - req params : 
man kann parameter über die url angeben mit (:)
bs : localhost:1000/:parameter1/:parameter2
und die angegebene parameter kann man mit 
req.params.parametername lesen. 
die sind im objekt params von req object gespeichert. 
4 - 
*/