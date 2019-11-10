// import 
var mongoose = require("mongoose");

// connect to database: 
mongoose.connect('mongodb://localhost/persondatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
// create schema (its just a pattern) : 
var personSchema = new mongoose.Schema({
    age:Number
})

var carschema = new mongoose.Schema({
    name:String
})

// compile schema (pattern) into a model: t 
var Person = mongoose.model("Person", personSchema);
var Car = mongoose.model("Car", carschema);
// add to database : 

/* var momen = new Person({
    age : 20
})

momen.save(function(err, x){
    if(err){
        console.log("something went wrong");
    }else{
        console.log(x);
    }
}); */

/* var car1 = new Car({
    name:"audi"
})

car1.save(function(err, obj){
    if(err){
        console.log("error");
    }else{
        console.log("saved");
        console.log(obj);
    }
});
 */

// add v2 : 
Person.create({
    age : 22
}, function(err, obj){
    if(err){
        console.log("error");
    }else{
        console.log(obj);
    }
});

Car.create({
    name : "mercedes"
}, function(err, obj){
    if(err){
        console.log("error");
    }else{
        console.log(obj);
    }
});


// retrieve from database : 


// collections : 
 
//db.collectionname.methode()


