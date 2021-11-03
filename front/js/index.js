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

var product = document.getElementById("items");
product.innerHTML =
  <a href="products._id">
    <article>
      <img src="products.imageUrl" alt="products.altTxt">
      <h3 class="products.name">Kanap name1</h3>
      <p class="products.description">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
  </a>;

for (product of products) {
  console.log(product);
}