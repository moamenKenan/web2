// import packages : 
var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyparser  = require("body-parser"),
    app         = express(); 
// set ejs
app.set("view engine" , "ejs");

// nesessary for body-parser
app.use(bodyparser.urlencoded({extended : true}));

// tell the server where is the public 
//app.use(express.static('public'));


// connect to db : 
mongoose.connect("mongodb://localhost/booking");

// create schema (constructur) : 
var hotel_schema = mongoose.Schema({
    name  :String,
    image :String,
    desc  :String
});

// create model (class) : para ( modelname, schema)
var hotel_model = mongoose.model("Hotel" , hotel_schema);



// routes : 
app.get("/", function(req, res){
    res.send("this is the home page");
}); 

app.get("/index" , function(req, res){
    // use model to retrive the info form db
    hotel_model.find({}, function(err, allhotels){
        if(err){
            console.log("error");
        }else{
            res.render("index" ,{allhotels : allhotels} );     
        }
    });
});

app.post("/index" , function(req, res){
    var name_input   = req.body.name,
        image_input  = req.body.image,
        desc_input   = req.body.desc;
    
    hotel_model.create(
        {  
            name   :name_input, 
            image  :image_input,
            desc   :desc_input
        },
        function(err, returned_obj){
            if(err){
                console.log("something went wrong!");
            }else{
                console.log(returned_obj);
                res.redirect("/index");
            }
        }); 
});

app.get("/index/new",function(req, res){
    res.render("new");
});

app.get("/index/:id", function(req,res){
    var id = req.params.id;
    hotel_model.findById(id, function(err, hotel){
        if(err){
            console.log("error");
        }else{
            res.render("show", {hotel:hotel});
        }
    })
});


// listen on port : 
app.listen("3000" , function(){
    console.log("========================");
    console.log("server has started");
    console.log("=========================");
});


/* 
what next : 
1- sqlite und the connection with express 
2- send json files ( not the whole page) from server side (important)
3- ajax (asyncron)
4- coures (authentication)
5- start with the project. 
*/