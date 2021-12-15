//On interroge l'api avec une methode Post
var panier = JSON.parse(localStorage.getItem("product-ID"));
var contact = JSON.parse(localStorage.getItem("contact"));

const orderPost = {
    panier,
    contact,
}
console.log(orderPost);

const options = {
  method: 'POST',
  body: JSON.stringify(orderPost),
  headers: {
      'Accept': 'application/json', 
      "Content-Type": "application/json" 
  },
};

fetch("http://localhost:3000/api/products" + "/order", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const idNumero = document.querySelector("#orderId");
    idNumero.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"));
    localStorage.clear();
  })
  .catch(function(err) {
    // Une erreur est survenue
  });