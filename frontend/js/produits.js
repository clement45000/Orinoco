//Récupération de l'id via le lien Url passé en paramètre au clique du lien donnée à l'image
// dans le fichier accueil.js.(on utilise replace pour obtenir seulement l'id)
function getCameraId(){
    const param = window.location.search;
    const id = param.replace("?id=", ""); 
    return id;
    //console.log(id); // 5be1ef211c9d44000030b062
}
//getById(); // renvoi l'id d'un produit

function AddCameraDetails(response){

    //On cible la section ayant pour id ="cameraDetails"
    const getSection = document.getElementById("cameraDetails");

    //On créer une div pour mettre tout les valeur de l'objet dendans(insertion)
    const div = document.createElement("div");
    div.setAttribute("id", "divcamerainfos");
   // div.setAttribute("class", "bg-dark");

    // Titre de la cameras
    const name = document.createElement("p");
    name.innerHTML = response.name;
    name.setAttribute("class", "cameraname h3")

    // Image de la camera
    const picture = document.createElement("img");
    picture.setAttribute("src", response.imageUrl);
    picture.setAttribute("id", "camerapicture");
    
    // Description de  la camera
    const description = document.createElement("p");
    description.innerHTML = response.description;

    // Lentilles
    const lenses = document.createElement("p");
    lenses.innerHTML = response.lenses;

    // Prix des caméras
    const price = document.createElement("p");
    price.setAttribute("class", "h5 pricecamera");
    price.innerHTML = response.price + ",00" + " " + "€" + " " +  "TTC";


  getSection.appendChild(div);  
    div.appendChild(name);
    div.appendChild(picture);
    div.appendChild(picture);
    div.appendChild(description);
    div.appendChild(lenses);
    div.appendChild(price);

}



const id = getCameraId();
get("http://localhost:3000/api/cameras/" + id)
    .then(function (response) {
        AddCameraDetails(response);
        //créer une fonction comme accueil.js    
        //jojo = response
        //console.log(jojo);
    })