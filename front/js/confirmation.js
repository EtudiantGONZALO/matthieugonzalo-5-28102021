//On cré la variable de l'option (method: POST)
var productsLocalStorage = JSON.parse(localStorage.getItem("product-ID"));
var contact = JSON.parse(localStorage.getItem("contact"));

//pour chaque objet du tableau productsLocalStorage, 
//je récupère l'id et je l'ajoute dans le tableau products
var products = [];
productsLocalStorage.forEach(element => {
  products.push(element.id);
});

//Je déclare la variable de l'option avec le product-ID et l'objet contact
const orderPost = {
    products,
    contact,
}

//Constante options de la methode post
const options = {
  method: 'POST',
  body: JSON.stringify(orderPost),
  headers: {
      'Accept': 'application/json', 
      "Content-Type": "application/json", 
  },
};

//On interroge l'api avec la methode post
fetch("http://localhost:3000/api/products" + "/order", options)
  .then((response) => response.json())

  .then((data) => {
    
    // On recupere l'order-ID et on le mets dans la balise span
    const idNumero = document.querySelector("#orderId");
    idNumero.innerText = data.orderId;

    //On efface le localStorage
    localStorage.clear();
  })

  .catch(function(err) {
    // Une erreur est survenue
  });