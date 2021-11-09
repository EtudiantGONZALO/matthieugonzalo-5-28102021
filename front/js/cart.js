// appeler l'api pour récupérer l'id passé en parametre du local storage
fetch("http://localhost:3000/api/products" + "/" + localStorage.id)
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(canape) {
        console.log(canape);
        var div = document.querySelector(".cart__item__img");
        var img = document.createElement("img");
        img.src = canape.imageUrl;
        img.alt = canape.altTxt;
        div.appendChild(img);
        var divH2P = document.querySelector(".cart__item__content__titlePrice");
        var h2 = document.createElement("h2");
        h2.innerText = canape.name;
        var p = document.createElement("p");
        p.innerText = canape.price;
        divH2P.appendChild("h2");
        divH2P.appendChild("p");
        var divPInput = document.querySelector("cart__item__content__settings__quantity");
        var pQuantity = document.createElement("p");
        pQuantity.innerText = "Qté : ";
        divPInput.appendChild(pQuantity);
    })
    .catch(function(err) {
        // Une erreur est survenue
      });
