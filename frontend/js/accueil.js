
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// var number =  getRandomInt(800, 50000);
// console.log(number);

 
//Function qui récupère les data de l'api pour les mettre ensuite dans une div parente
function addProduct(response, section){
    
    //création d'une div parente pour insérer toutes les données
    const div = document.createElement("div");
    div.setAttribute("class"," testdiv");

   //Nom du produit
   const name = document.createElement("p");
   name.setAttribute("class","h3 mt-3 mb-3 name");
   name.innerHTML = response.name;

   //récupération des images
   const img = document.createElement("img");
   img.setAttribute("src", response.imageUrl);
   img.setAttribute("class", "testimg");

   //Récuparation des descriptions
   const legend = document.createElement("p");
   legend.setAttribute("class", "mt-3 pr-5 pl-5");
   legend.innerHTML = response.description;

   //Récupération des lentilles
   const lenses = document.createElement("p");
   lenses.innerHTML = "Optiques :" + " " + response.lenses;

   //Récupération des prix
   const price = document.createElement("p");
   price.setAttribute("class", "h5 price");
   price.innerHTML = response.price + ",00" + " " + "€" + " " +  "TTC";

   // Mettre un lien pour allés vers le produit en question via l'id
    const getCameraById = document.createElement("a");
    getCameraById.setAttribute("href", "produits.html?id=" + response._id );

   // Insertion des donées enfant dans leur div parent
   section[0].appendChild(div);
   div.appendChild(name);
   div.appendChild(getCameraById);
   div.appendChild(legend);
   div.appendChild(lenses);
   div.appendChild(price);
   getCameraById.appendChild(img);
}

function addDiv(section) {
    const div = document.createElement("div");
   // div.setAttribute("class","bg-primary");
    section[0].appendChild(div);
}

//compte le nombre de produit dans le panier
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

get("http://localhost:3000/api/cameras")
.then(function (response){
    const section = document.getElementsByClassName('products');
  
    for(let i = 0; i < response.length; i++){
        addProduct(response[i], section);
    }
})

.catch(function (err){
    console.log(err);
    if (err === 0){
        alert("Erreur 500, impossible d'établir une connection au serveur");
    }
});

