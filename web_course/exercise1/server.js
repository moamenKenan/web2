// my Server : 
 var express = require('express');
 var app = express();

 // / => hi there 
 app.get('/', function(req, res){
    res.send('hi there');
 });


// /speak : my solution  
/*app.get('/speak/:x', function(req, res){
    var x = req.params.x;
    switch(x){
        case 'pig' : res.send('the pig says "oink"'); break;
        case 'cow' : res.send('the cow says "Moo"');  break;
        case 'dog' : res.send('the dog says "woof woof!'); break;
    }
});
*/

// speak : colt's solution 
app.get('/speak/:animal',function(req, res){
    var sounds= {
        cow : 'moo',
        dog : 'woof woof ! ',
        fish: 'I hate you human',
        snake:'fhhhhhhh'
    }
    var animal = req.params.animal;
    res.send(sounds[animal.toLowerCase()]);
})

// /repeat : 
app.get('/repeat/:word/:count', function(req, res){
    var word = req.params.word,
        count = req.params.count,
        output= '' ; 

        for(var i = 0 ; i < count ; i++){
            output+=word+ '  ';
        }
        res.send(output);
        
});

// not found : 
app.get('*', function(req, res){
    res.send('Sorry this page not found ! ');
});

app.listen('3000', function(){
    console.log('==================================');
    console.log('server starts ...');
    console.log('==================================');
});