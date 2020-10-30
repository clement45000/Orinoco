//Affiche du nombre d'article dans le panier
function showNbItemsInBusketNav(){
    let basketContent = JSON.parse(localStorage.getItem("basketContent"));
    if(basketContent === null){
        const nbItems = document.getElementById("numberofproduct");
        // afficher le block
    }else{
    const nbItems = document.getElementById("numberofproduct");
    nbItems.innerHTML = basketContent.length;
    }
}

showNbItemsInBusketNav();


function showProductInbusketpage(){
   
    const basketContent = JSON.parse(localStorage.getItem("basketContent")); //Json parse convertie en json
   // console.log(basketContent);
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
    }else{
        console.log("empty busket");
      
    }
   
}
showProductInbusketpage();

// const test = JSON.parse(localStorage.getItem("basketContent"));
// console.log(test[0].priceProduct);

//////////////////////// Verification du formulatire pour passer la commande //////////////////////////////////////
