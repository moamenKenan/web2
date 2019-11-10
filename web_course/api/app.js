// the ziel : 
// write code that make a request for us

// first of all 
// make request with simple-javascript code 
var request = require('request')
request("https://weatherbit-v1-mashape.p.rapidapi.com/current", function(error , response , body){
    if(error){
        console.log('something went wrong !');
        console.log(error);
    }else{
        if(response.statusCode == 200){
            // its works 
            console.log(body);
        }
    }
});

// so is shorter : 
/*
var request = require('request');
request('http://www.google.com', functino(error, response , body){
    if(!error && response.statusCode== 200){
        console.log(body);
    }
});
*/

// in this example the api had not worked 