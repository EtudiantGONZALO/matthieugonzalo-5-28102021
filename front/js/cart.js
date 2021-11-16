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
.then(function(canapes) {
    //Appel de localStorage
    localStorage.getItem("monPanier");
    canapes.forEach(canape => {
        console.log(canape);
        //Création de la présentation du produit dans le panier
        var section = document.querySelector("#cart__items");
        var article = document.createElement("article");
        //article.classList.add("cart__item");
        //article.setAttribute("data-id", localStorage.monPanier.id);
        section.appendChild(article);
        //var divimg = document.createElement("div");
        //divimg.classList.add("cart__item__img");
        //article.appendChild(divimg);
        //var img = document.createElement("img");
        //img.src = localStorage.monPanier.img;
        //img.alt = localStorage.monPanier.alt;
        //divimg.appendChild(img);
        //var cart = document.createElement("div");
        //cart.classList.add("cart__item__content");
        //article.appendChild(cart);
        //var cartTitlePrice = document.createElement("div");
        //cartTitlePrice.classList.add("cart__item__content__titlePrice");
        //cart.appendChild(cartTitlePrice);
        //var H2 = document.createElement("h2");
        //H2.innerText = localStorage.monPanier.nameLS;
        //cartTitlePrice.appendChild(H2);
        //var p = document.createElement("p");
        //p.innerText = localStorage.monPanier.price;
        //cartTitlePrice.appendChild(p);
        //var divQuantite = document.createElement("div");
        //divQuantite.classList.add("cart__item__content__settings");
        //cart.appendChild(divQuantite);
        //var divQuantiteInput = document.createElement("div");
        //divQuantiteInput.classList.add("cart__item__content__settings__quantity");
        //divQuantite.appendChild(divQuantiteInput);
        //var pQuantite = document.createElement("p");
        //pQuantite.innerText = "Qté : ";
        //divQuantiteInput.appendChild(pQuantite);
        //var input = document.createElement("input");
        //input.setAttribute("type", number);
        //input.classList.add("itemQuantity");
        //input.setAttribute("name", itemQuantity);
        //input.setAttribute("min", 1);
        //input.setAttribute("max", 100);
        //input.setAttribute("value", localStorage.monPanier.quantite);
        //divQuantiteInput.appendChild(input);
        var spanQuantite = document.querySelector("#totalQuantity");
        spanQuantite.innerText = localStorage.monPanier.quantite;
        var spanPrice = document.querySelector("#totalPrice");
        spanPrice.innerText = localStorage.monPanier.quantite * localStorage.monPanier.price;
        localStorage.setItem(spanPrice);
        if (spanPrice = 0; spanPrice < 100; spanPrice++) {
            spanPrice = spanPrice + spanPrice++;
        }  
        });
    })
    .catch(function(err) {
        // Une erreur est survenue
      });    
