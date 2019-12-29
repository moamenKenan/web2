// ajax : 
$(document).ready(function(){
    var array = loaddata(4,2);
    dataToHomepage();
    
    
    
  
    
})

// get data ==============================================

async function searchById(id){
    var url ='http://localhost:8000/api/person/gib/';
        url = url+ id;
        try{
            var data =(await ajaxGet(url)).daten;
            
            
            return data;
        }catch(e){
            console.log(e.statusText);
        }
}



async function search(vorname=undefined , nachname =undefined ,
     ort=undefined, plz=undefined){
    var result= [];
    var url ='http://localhost:8000/api/person/alle';
        try{
            var data =(await ajaxGet(url)).daten;
            
            data.forEach(function(element){
                if(vorname != undefined){
                    if(element.vorname.toLowerCase() == vorname.toLowerCase()){
                        result.push(element)
                    }
                }else if(nachname != undefined){
                    if(element.nachname.toLowerCase() == name.toLowerCase()){
                        result.push(element)
                    }
                } else if(plz != undefined){
                    if(element.adresse.plz.toLowerCase() == plz.toLowerCase()){
                        result.push(element)
                    }
                }else if(ort != undefined){
                    if(element.adresse.ort.toLowerCase() == ort.toLowerCase()){
                        result.push(element)
                    }
                }
            });
            console.log(result);
            
            
        }catch(e){
            console.log(e.statusText);
        }
        
}


// Home page ============================================= 

 async function loaddata(max , size){
    let objs = [],
    ids = randomNum(max, size);
    for (let index = 0; index < ids.length; index++) {
        var obj = await searchById(ids[index]);
        objs.push(obj)
    }
    return objs
}

async function dataToHomepage(){
    let array = await loaddata(4,3);
    let all_h1 = $('#mainDoctors  h1');
    let all_ul = $('#mainDoctors ul');
    console.log(all_h1);
    
    let i = 0 ;
    all_h1.each(function(index){
        $(this).html(
            array[i].vorname+ ' ' + array[i++].nachname);
    })

    let j=0 ; 
    all_ul.each(function(index){
        let html = objTohtml(array[j++])
        $(this).html(html);
        })
}

function objTohtml(obj){
    let html=' ';
    html += '<li> '+obj.telefonnummer+' </li>';
    html += '<li>' + obj.email+' </li>';
    html += '<li>' +obj.adresse.strasse + 
            obj.adresse.hausnummer +' </li>';
    html += '<li>' + obj.adresse.plz + 
            obj.adresse.ort+' </li>'; 
    return html
}


// helper function =========================================

function ajaxGet(url){
    let data;
    return $.ajax({
         type: "GET",
         url: url
     });   
}

function randomNum(max, size){
    var erg = []; 
    for(var i = 0 ; i <size ; i++){
        num  = Math.floor((Math.random() * max) + 1)
        if(($.inArray(num, erg)) === -1){
            erg.push(num)
        }else{
            size++;
        }
    }
    return erg;
}
