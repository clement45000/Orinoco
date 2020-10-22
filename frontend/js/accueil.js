
//Function qui récupère les data de l'api pour les mettre ensuite dans une div parente
function addProduct(response, section){
    const div = document.createElement("div");
    div.innerHTML = response.name;
   // div.setAttribute("class","");

   //récupération des images
   const img = document.createElement("img");
   img.setAttribute("src", response.imageUrl);
   img.setAttribute("width", "50%");

   //Récuparation des descriptions
   const legend = document.createElement("div");
   legend.innerHTML = response.description;

   //Récupération des lentilles
   const lenses = document.createElement("p");
   lenses.innerHTML = "Les Optiques :" + response.lenses;

   //Récupération des prix
   const price = document.createElement("p");
   price.innerHTML = response.price + "€";

   // Mettre un lien pour allés ver le produit en question via une requête post


   // Insertion des donées enfant dans leur div parent
   section[0].appendChild(div);
   div.appendChild(img);
   div.appendChild(legend);
   div.appendChild(lenses);
   div.appendChild(price);
}

function addDiv(section) {
    const div = document.createElement("div");
    div.setAttribute("class","bg-primary");
    section[0].appendChild(div);
}

get("http://localhost:3000/api/cameras")
.then(function (response){
    const section = document.getElementsByClassName('row');
    for(let i = 0; i < response.length; i++){
        addProduct(response[i], section);
    }

    if (response.length % 2 === 1) {
        addDiv(section);
    }
})
.catch(function (err){
    console.log(err);
    if (err === 0){
        alert("Erreur 500");
    }
});

