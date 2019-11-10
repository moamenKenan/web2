# mongoose : 
## add v1
```
var obj = new modelname({
    key : value
    ..
})

obj.save(callbackfunction(err, object_sendback_form_database){
    if(err){
        "error"
    }else{
        "saved"
        console.log(object_returned_form_database) ;
    }
})
```

## add v2 : 
```
modelname.create({
    key:value
    ...
}, callbackfunciton(err, object){
    if(err){
        "error"
    }else{
        return object
    }
})
```


## find : 
```
modelname.find({key:value} , function(err, results){
    if(err){
        "error
    }else{
        return results
    }
})
```

# there is more methods...
