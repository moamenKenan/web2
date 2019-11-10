var express = require("express");
var app = express(); 
app.set("view engine" , "ejs"); 
var request = require('request');

app.get("/" , (req,res) => {
    res.render("home");
});


app.get("/search", (req, res) => {
    res.render("search");
});
//=====================================================

app.get("/results", (req,res) => {
    var person_name = req.query.person_name;
    var address = req.query.address;
    var person_name = person_name.toLowerCase(),
        address= address.toLowerCase();
    request("https://jsonplaceholder.typicode.com/users" , (error , response , body) => {
        if(!error && response.statusCode == 200 ){
            var persons = [];
            var body = JSON.parse(body);
            body.forEach(element => {
                var api_name = element.name.toLowerCase();
                var api_address = element.address.street.toLowerCase() + " " + element.address.city.toLowerCase();
                if(api_name.search(person_name) != -1 || api_address.search(address) !=-1 ){
                    persons.push(element);
                    
                }
            });
            res.render("results" ,{persons:persons}  );
        }else{
            res.send("page not found");
        }

    });
});


/*
// use es6-template syntax : 
const request = require('request');
// => : error function 
request('https://jsonplaceholder.typicode.com/todos/' , (error, res, body) => {
    if(!error && res.statusCode== 200){
        const parsedbody = JSON.parse(body);
        parsedbody.forEach(element => {
            // to write variables : ${}
            console.log(`task(${element.id}) : ${element.title}`);
        });
    }       
});
*/

// use request promis
/* const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/todos/')
    .then((x) => {
        const parsesddata = JSON.parse(x);
        parsesddata.forEach(element => {
            console.log(`task (${element.id}) : ${element.title}.`)
        });
    })
    .catch((err) => {
        console.log('error' , err);
    }); */

app.listen("3000" , () => {
    console.log("server has started");
});