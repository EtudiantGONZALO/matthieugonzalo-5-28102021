// Declaration de la variable et envoi de la réponse de l'api au format JSON
var products = fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

var product = async () => {
  await products();
  document.getElementById("items").innerHTML = 
    `<a href="${products._id}">
      <article>
        <img src="${products.imageUrl}" alt="${products.altTxt}">
        <h3 class="productName">${products.name}</h3>
        <p class="productDescription">${products.description}</p>
      </article>
    </a>;`
}

product();

for (product of products) {
  console.log(product);
}