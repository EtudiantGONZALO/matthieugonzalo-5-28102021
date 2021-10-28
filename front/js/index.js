// Demande des produits a l'api
fetch("http://localhost:3000/api/products");

// Envoi de la réponse de l'api au format JSON
fetch("http://")
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

// Récupérer ou se situe l'image, le nom et la description
var productCards = document.querySelector("items");
var productImageCible = document.querySelector("items" a > article > img); 
var productNameCible = document.querySelector("items" a > article > h3);
var productDescriptionCible = document.querySelector("items" a > article > p);

// Récupérer l'image du produit, le nom du produit et la description du produit dans l'api
var imageProduct = products._id;
var nameProduct = products.name;
var descriptionProduct = products.description;

// Création de chaque cards produit
class cardsProduct {
    constructor(productCards, imageProduct, nameProduct, descriptionProduct) {
        this.productCards = productCards;
        this.productImageCible = imageProduct;
        this.productNameCible = nameProduct;
        this.productDescriptionCible = descriptionProduct;
    }
}

// fonction qui affiche l'image, le nom et la description du produit dans la cible de chaque entrée de produit de l'api
function product() {
    for (products[]) {
        console.log(productCards)
        console.log(imageProduct)
        console.log(nameProduct == imageProduct)
        console.log(descriptionProduct == imageProduct)
    }
}
product();