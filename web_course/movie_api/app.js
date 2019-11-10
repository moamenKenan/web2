// import packages : 
var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

// get-request : 
app.get('/results', (req, res) =>{
    var search_word = req.query.search_word;
    request('https://jsonplaceholder.typicode.com/photos', (error,response , body) =>{
        if(!error && response.statusCode==200){
            var data = JSON.parse(body);
            var titles = [];
            data.forEach(element => {
                if(element.title.search(search_word)!= -1){
                    titles.push(element.title);
                }
            });
            res.render('results', {titles:titles});
        }
    });
});

app.get('/search', (req, res) => {
    res.render('search');
});

// listen on port 3000 : 
app.listen('3000', () => {
    console.log('server starts ..');
});