//Récupération de l'id de l'appareil photo
function getCameraId(){
    const param = window.location.search;
    const id = param.replace("?id=", ""); 
    return id;
}


function AddCameraDetails(response){

    //On cible la section ayant pour id ="cameraDetails"
    const getSection = document.getElementById("cameraDetails");

    //On créer une div pour mettre tout les valeur de l'objet dendans(insertion)
    const div = document.createElement("div");
    div.setAttribute("id", "divcamerainfos");
    div.setAttribute("class", "mt-5 shadow-lg p-3 mb-5 bg-white rounded");
   // div.setAttribute("class", "bg-dark");

    // Titre de la cameras
    const name = document.createElement("p");
    name.innerHTML = response.name;
    name.setAttribute("class", "cameraname h1 mt-4 mb-4")

    // Image de la camera
    const picture = document.createElement("img");
    picture.setAttribute("src", response.imageUrl);
    picture.setAttribute("id", "camerapicture");
    
    // Description de  la camera
    const description = document.createElement("p");
    description.setAttribute("class", "mt-3 pr-5 pl-5");
    description.innerHTML = response.description;

    // Lentilles
    const lenses = document.createElement("select");
    const optionsDefault = document.createElement("option");
    optionsDefault.innerHTML = "choix de la lentilles";
    lenses.appendChild(optionsDefault);

    for (let i = 0; i < response.lenses.length; i++){
        const option = document.createElement("option");
        option.innerHTML = response.lenses[i];
        lenses.appendChild(option);
    }

    const btnAddCamera = document.createElement("button");
    btnAddCamera.setAttribute("class", "btn btn-secondary mb-3 mt-3");
    btnAddCamera.innerHTML = "Ajouter au panier";

    // Prix des caméras
    const price = document.createElement("p");
    price.setAttribute("class", "h5 pricecamera mt-3");
    price.innerHTML = response.price + ",00" + " " + "€" + " " +  "TTC";


  getSection.appendChild(div);  
    div.appendChild(name);
    div.appendChild(picture);
    div.appendChild(picture);
    div.appendChild(description);
    div.appendChild(lenses);
    div.appendChild(price);
    div.appendChild(btnAddCamera);

}



const id = getCameraId();
get("http://localhost:3000/api/cameras/" + id)
    .then(function (response) {
        AddCameraDetails(response);
        //créer une fonction comme accueil.js    
        //jojo = response
        //console.log(jojo);
    })
    .catch(function (err){
        console.log(err);
        if (err === 0){
            alert("Erreur404 la page n'existe pas");
        }
    });