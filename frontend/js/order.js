//Affiche du nombre d'article dans le panier
function showNbItemsInBusket(){
    let basketContent = JSON.parse(localStorage.getItem("basketContent"));
    if(basketContent === null){
        const nbItems = document.getElementById("numberofproduct");
    }else{
    const nbItems = document.getElementById("numberofproduct");
    nbItems.innerHTML = basketContent.length;
    }
}

showNbItemsInBusket();
