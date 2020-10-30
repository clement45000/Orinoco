//Récupération de l'id de l'appareil photo
function getCameraId(){
  const param = window.location.search;
  const id = param.replace("?id=", ""); 
  return id;
}

function AddProductToBasket(lenseSelected,response){
 let basketContent = JSON.parse(localStorage.getItem("basketContent"));
   if(basketContent === null){ // permet de rajouter un objet à chaque clique du btn 
        basketContent = [];
  }  

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  idProduct = id;
  nameProduct = response.name;
  priceProduct = response.price;
  const refProduit = getRandomInt(1, 5000000);

  product = {id, lenseSelected, nameProduct, priceProduct, refProduit};
  basketContent.push(product);

  localStorage.setItem("basketContent", JSON.stringify(basketContent));
}

//Montre le nombre de produit dans la navigation logo pannier
function showNbItemsInBusket(){
  let basketContent = JSON.parse(localStorage.getItem("basketContent"));
  if(basketContent === null){
     console.log(basketContent);
     const nbItems = document.getElementById("numberofproduct");
     nbItems.innerHTML = "(panier vide)";
  }else{
  const nbItems = document.getElementById("numberofproduct");
  nbItems.innerHTML = basketContent.length;
  }
}

showNbItemsInBusket();

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

  // choix de la Lentilles
  const lenses = document.createElement("select");
  const optionsDefault = document.createElement("option");
  optionsDefault.innerHTML = "choix de la lentilles";
  lenses.appendChild(optionsDefault);

  // Boucle pour pouvoir choisie la lentille
  for (let i = 0; i < response.lenses.length; i++){
      const option = document.createElement("option");
      option.innerHTML = response.lenses[i];
      lenses.appendChild(option);
  }

  // Prix de l'appareil photo
  const price = document.createElement("p");
  price.setAttribute("class", "h5 pricecamera mt-3");
  price.innerHTML = response.price + ",00" + " " + "€" + " " +  "TTC";

  // Bouton du panier 
  const btnAddCamera = document.createElement("button");
  btnAddCamera.setAttribute("class", "btn btn-primary mb-3 mt-3");
  btnAddCamera.innerHTML = "Ajouter au panier";

  //Récupération de la valeur de la lentilles selectionné (balise select)
  //Par défault au click du button AJouter au panier la value de la balise (select) = choix de la lentille
  btnAddCamera.addEventListener("click", function(){
      //récupération de la balise select
      const getBtnAddToBusket = document.getElementsByTagName("select");
      // recupération de la valeur de la lentille au click du btn
      const getBtnLensesValue = getBtnAddToBusket[0].value; 
      if(getBtnAddToBusket[0].value === "choix de la lentilles"){
          alert("veuillez choisir une lentille");
      } else{
          AddProductToBasket(getBtnLensesValue,response);
          window.location.href = "panier.html"; //renvoit à la page de confirmation
   //   console.log(getBtnLensesValue);
      }
    
  });

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
  })
  
  .catch(function (err){
      console.log(err);
      if (err === 0){
          alert("Erreur404 la page n'existe pas");
      }
  });


  