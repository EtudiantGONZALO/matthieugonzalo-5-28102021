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

        //On crée l'image
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
        
        //On crée le nom et le prix
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
        
        //On crée l'input quantité
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
        input.type = 'number';
        input.classList.add("itemQuantity");
        input.name = "itemQuantity";
        input.setAttribute("min", 1);
        input.setAttribute("max", 100);
        input.setAttribute("value", canapeLocal.quantite);
        divQuantiteInput.appendChild(input);
        
        //On crée le bouton supprimer
        var divSupprimer = document.createElement("div");
        divSupprimer.classList.add("cart__item__content__settings__delete")
        divQuantite.appendChild(divSupprimer);
        var pSupprimer = document.createElement("p");
        pSupprimer.classList.add("deleteItem");
        pSupprimer.innerText = "Supprimer";
        divSupprimer.appendChild(pSupprimer);

        //On met à jour la quantité total et le prix total des canapés
        var spanQuantite = document.querySelector("#totalQuantity");
        spanQuantite.innerText = Number(canapeLocal.quantite) + Number(spanQuantite.innerText);
        var spanPrice = document.querySelector("#totalPrice");
        spanPrice.innerText = Number(canapeLocal.price) + Number(spanPrice.innerText);

        //On crée une fonction pour changer la quantité
        input.addEventListener('change', function() {
          //nouveau tableau dans le localStorage 
          canapeLocal.quantite = Number(input.value);
          canapeLocal.price = Number(canapeApi.price) * Number(canapeLocal.quantite);
          localStorage.setItem("canapes", JSON.stringify(panier));
          window.location.href = "cart.html";
        });
                
        //On crée une fonction pour supprimer le canapé 
        pSupprimer.addEventListener("click", function() {
          var deleteId = canapeLocal.id;
          console.log(deleteId);
          var deleteColor = canapeLocal.color;
          panier = panier.filter( elt => elt.id !== deleteId || elt.color !== deleteColor);
          localStorage.setItem("canapes", JSON.stringify(panier));
          window.location.href = "cart.html";
        });

        

        
  })
  .catch(function(err) {
  // Une erreur est survenue
  });
});

//******************** Vérification du formulaire*************************/

        //On enregistre les données du formulaire
        var btnformulaire = document.querySelector('.cart__order__form');
        function checkValidity() {
          var contactObj = {
            firstName : document.querySelector('#firstName').value,
            lastName : document.querySelector('#lastName').value,
            address : document.querySelector('#address').value,
            city : document.querySelector('#city').value,
            email : document.querySelector('#email').value
          }
          var formulaire = JSON.parse(localStorage.getItem("contact")[2]);

          if (formulaire == true) {
            localStorage.setItem("contact", JSON.stringify(formulaire));
            
            } else {
              //On vérifie le prénom
            var masqueChiffreCaractere = /[\d/][_!¡?÷?¿+=@#%&*\\(){}~<>;:[\]]/g;
            var pErrorFirstNameMsg = document.querySelector("#firstNameErrorMsg");
            var validFirstName = masqueChiffreCaractere.exec(contactObj.firstName);
            pErrorFirstNameMsg.innerText = "Votre prénom ne doit pas contenir de caractères : " + validFirstName[0];

            //On vérifie le Nom
            var pErrorLastNameMsg = document.querySelector("#lastNameErrorMsg");
            var validLastName = masqueChiffreCaractere.exec(contactObj.lastName);
            pErrorLastNameMsg.innerText = "Votre Nom ne doit pas contenir de caractères : " + validLastName[0];

            //On vérifie l'adresse
            var masqueCaractere = /[&~"#{[()\]}\\`_@°=+£¤%*µ,?;/:§!]/g;
            var pErrorAddressMsg = document.querySelector("#addressErrorMsg");
            var validAddress = masqueCaractere.exec(contactObj.address);
            pErrorAddressMsg.innerText = "Votre adresse ne doit pas contenir de caratères spéciaux : " + validAddress[0];

            //On vérifie la ville
            var pErrorCityMsg = document.querySelector("#cityErrorMsg");
            var validCity = masqueChiffreCaractere.exec(contactObj.city);
            pErrorCityMsg.innerText = "Votre ville ne doit pas contenir de caractères : " + validCity[0];
              }
          }