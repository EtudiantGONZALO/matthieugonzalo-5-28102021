var panier = JSON.parse(localStorage.getItem("canapes"));
console.log(panier);
panier.forEach(canapeLocal => {
fetch("http://localhost:3000/api/products" + "/" + canapeLocal.id)
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
.then(function(canapeApi) {
    console.log(canapeApi);
        //Création de la présentation du produit dans le panier
        var section = document.querySelector("#cart__items");
        var article = document.createElement("article");
        article.classList.add("cart__item");
        article.setAttribute("data-id", canapeLocal.id);
        section.appendChild(article);
        var divimg = document.createElement("div");
        divimg.classList.add("cart__item__img");
        article.appendChild(divimg);
        var img = document.createElement("img");
        img.src = canapeApi.imageUrl;
        img.alt = canapeApi.altTxt;
        divimg.appendChild(img);
        var cart = document.createElement("div");
        cart.classList.add("cart__item__content");
        article.appendChild(cart);
        var cartTitlePrice = document.createElement("div");
        cartTitlePrice.classList.add("cart__item__content__titlePrice");
        cart.appendChild(cartTitlePrice);
        var H2 = document.createElement("h2");
        H2.innerText = canapeApi.name;
        cartTitlePrice.appendChild(H2);
        var pPrice = document.createElement("p");
        pPrice.innerText = canapeApi.price + " €";
        cartTitlePrice.appendChild(pPrice);
        var divQuantite = document.createElement("div");
        divQuantite.classList.add("cart__item__content__settings");
        cart.appendChild(divQuantite);
        var divQuantiteInput = document.createElement("div");
        divQuantiteInput.classList.add("cart__item__content__settings__quantity");
        divQuantite.appendChild(divQuantiteInput);
        var pQuantite = document.createElement("p");
        pQuantite.innerText = "Qté :";
        divQuantiteInput.appendChild(pQuantite);
        var input = document.createElement("input");
        input.setAttribute("type", Number);
        input.classList.add("itemQuantity");
        input.name = "itemQuantity";
        input.setAttribute("min", 1);
        input.setAttribute("max", 100);
        input.setAttribute("value", canapeLocal.quantite);
        divQuantiteInput.appendChild(input);
        var divSupprimer = document.createElement("div");
        divSupprimer.classList.add("cart__item__content__settings__delete")
        divQuantite.appendChild(divSupprimer);
        var pSupprimer = document.createElement("p");
        pSupprimer.classList.add("deleteItem");
        pSupprimer.innerText = "Supprimer";
        divSupprimer.appendChild(pSupprimer);
          myTotalQuantite = 0;
          for (var i = 0, len = canapeLocal.length; i < len; i++) {
            myTotalQuantite = canapeLocal.push(canapeLocal[i].quantite);
          }
          var spanQuantite = document.querySelector("#totalQuantity");
          spanQuantite.innerText = myTotalQuantite;
          var myTotalPrice = 0;
          for (var o = 0, leng = canapeLocal.length; o < leng; o++) {
            myTotalPrice += canapeLocal.push(canapeLocal[o].price);
          }
          var spanPrice = document.querySelector("#totalPrice");
          spanPrice.innerText = myTotalPrice;
          var supprimerCanape = canapeLocal.id;
          for (var s = 0, lengt = )
        })
  .catch(function(err) {
  // Une erreur est survenue
  });
});



  //if (total == null) {
    //spanQuantite.innerText = "0";
    //spanPrice.innerText = "0";
  //} else if (total == Number, total = ) {

  //}
