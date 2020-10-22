function ajaxGet(url, callback,err){  //
    var req = new XMLHttpRequest(); 
    req.open("GET", url);  
    req.addEventListener("load", function () { 
        if (req.status >= 200 && req.status < 400) { 
            callback(req.responseText);
        } else{
           // Si la ville existe pas (message erreur)
            if(req.status === 404){
                var err = document.getElementById('erreur').style.display="block";
                var error_jojo = document.getElementById('error_number').style.display="none";
            }
        }
    });
    req.send(null);
}


    
    ajaxGet("http://localhost:3000/api/cameras", function(reponse)
    {
      var apidata = JSON.parse(reponse);
      console.log(apidata);

      // id du produit 1
      var idPdtUn = apidata[0]._id;
      var test = document.getElementById('id');
      test.innerHTML = "Id du produit:" + " " +  idPdtUn;

      // Nom du produit 1
      var namePdtUn = apidata[0].name;  
      var name = document.getElementById('name');
      name.textContent = namePdtUn;  


    //   //Description du produit 1 
    //   var descriptionPdtDeux = apidata[0].price;  
    
    //   //Prix du produit 1
    //   var pricePdt = apidata[0].description;  

    //   // Option 1 du produit
    //   var optionUn = apidata[0]._id;  

    //  // Option 1 du produit
    //   var optionDeux = apidata[0]._id;  

    //   // Option 1 du produit
    //   var optionTrois = apidata[0]._id;  





    });



    
