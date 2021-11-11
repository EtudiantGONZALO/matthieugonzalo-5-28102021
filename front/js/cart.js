//récupération dans une variable l'id passé en parametre de l'url
const queryString_url_id = window.location.search;

const leId = queryString_url_id.slice(4);
console.log(leId);

// appeler l'api avec la route /get 1 canape
fetch("http://localhost:3000/api/products" + "/" + leId)
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(canape) {
        console.log(canape);

        //Appel du localStorage
        localStorage["canapcolor", "id", "quantite"];
        
        //Création de la présentation du produit dans le panier
        var section = document.querySelector("#cart__items");
        section.innerHTML = '<article class="cart__item" data-id="localStorage.id">';
        section.innerHTML += '<div class="cart__item__img">';
        section.innerHTML += '<img src="canape.imageUrl" alt="canape.altTxt">';
        section.innerHTML += '<div class="cart__item__content">';
        section.innerHTML += '<div class="cart__item__content__titlePrice">';
        section.innerHTML += '<h2>canape.name</h2>';
        section.innerHTML += '<p>canape.price</p>';
        section.innerHTML += '<div class="cart__item__content__settings">';
        section.innerHTML += '<div class="cart__item__content__settings__quantity">';
        section.innerHTML += '<p>Qté : </p>';
        section.innerHTML += '<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="canape.price">';
        section.innerHTML += '<div class="cart__item__content__settings__delete">';
        section.innerHTML += '<p class="deleteItem">Supprimer</p>';
        var totalquantite = document.querySelector("#totalQuantity");
        totalquantite.innerText = localStorage.quantite;
        var total = document.querySelector("totalPrice");
        total.innerText = localStorage.quantite * canape.price;
    })
    
    .catch(function(err) {
    // Une erreur est survenue
      });
