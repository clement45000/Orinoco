//Affiche l'état actuelle du panier
function showNbItemsInBusketNav(){
    let basketContent = JSON.parse(localStorage.getItem("basketContent"));
  //  console.log(basketContent.length);
    if(basketContent.length <= 0){
        document.getElementById("emptybusket").style.display="block";
        console.log("panier vide");
    }else{
    document.getElementById("infosbusket").style.display="block";
    const nbItems = document.getElementById("numberofproduct");
    nbItems.innerHTML = basketContent.length;
    console.log("jojo panier plein");
    }
}
showNbItemsInBusketNav();

function showProductInbusketpage(){
   
    const basketContent = JSON.parse(localStorage.getItem("basketContent")); //Json parse convertie en json
    if(basketContent !== null){ 

        for(let i = 0; i<basketContent.length; i++){
        
            const tabsLine = document.createElement("tr");
            //Affichage des noms des produits
            const nameItems = document.createElement("td")
            nameItems.innerHTML = basketContent[i].nameProduct;
    
            //Affichage des Optiques
            const lensesItems = document.createElement("td");
            lensesItems.innerHTML = basketContent[i].lenseSelected;
    
            //Prix des produits
            const pricesItems = document.createElement("td");
            pricesItems.innerHTML = basketContent[i].priceProduct + "€";
          
            const total = basketContent.reduce((a, c) => a += c.priceProduct, 0);
            console.log(total);
            const showTotalPrice = document.getElementById("totalprice");
            showTotalPrice.innerHTML = total + "€";
            //Set item le resultat à la confirmation de la commande dans une autres clé que busketContent
            // Pour le get à l'affichage de la commande 

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "btn btn-danger mt-1") ;
            deleteButton.innerHTML = "delete";

            /////////////////////// on click ///////////////////////         
            deleteButton.addEventListener("click", function(){
                const parsed = JSON.parse(localStorage.getItem('basketContent'));
                parsed.splice(parsed.indexOf(parsed[i]), 1);
                localStorage.setItem('basketContent', JSON.stringify(parsed));
                document.location.reload(true);
            });
            const tbody = document.getElementById("bodytabs");
            tbody.appendChild(tabsLine);
            tabsLine.appendChild(nameItems);
            tabsLine.appendChild(lensesItems);
            tabsLine.appendChild(pricesItems);
            tabsLine.appendChild(deleteButton);
        }
    }
   
}
showProductInbusketpage();

//////////////////////// Verification du formulaire pour passer la commande //////////////////////////////////////
// 4. Mettre en mémoire les infos de la commande tableau
// 5.envoyer une requête post
// 6. recupérer la commande et afficher les details de la commande (cle du local storage);
// -----------------------------------------------------------------------

function isNumber(value){
    if(/\d/.test(value)){
        return true;
    }
    return false;
}

document.forms["validation"].addEventListener("submit",function(e){
    let error;
    let inputs = this;

    for (let i = 0; i < inputs.length; i++){
        if (!inputs[i].value){
            error = "Veuillez remplir tous les champs";
        }

        if(isNumber(namecustomer.value) === true){
            error = "Le champs Nom ne peut contenir que des caractères";
            console.log(error);
        }

        if(isNumber(lastname.value) === true){
            error = "Le champs Prénom ne peut contenir que des catactères";
        }

        if(isNumber(city.value) === true){
            error = "Le champs ville ne peut contenir que des caractères";
        }
    }

    
    if(error){
        e.preventDefault();
        let errorMessage = document.getElementById("error");
        errorMessage.innerHTML = error;
        return false;
    } else{
        e.preventDefault();
        //création de l'objet contact
        let customerInfoObject = {
            name: namecustomer.value,
            lastName: lastname.value,
            mail: email.value,
            adress: adress.value,
            city: city.value,
            postalCode: postalcode.value
        };
        let productsOrder = JSON.parse(localStorage.getItem("basketContent"));

        localStorage.setItem("productsarray", JSON.stringify(productsOrder));
        localStorage.setItem("contactObject", JSON.stringify(customerInfoObject));

        let products = JSON.parse(localStorage.getItem("productsarray"));
        let contact = JSON.parse(localStorage.getItem("contactObject"));
        console.log(products);
        console.log(contact);
        alert("formulaire envoyé");
    }
});












