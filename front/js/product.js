//récupération dans une variable l'id passé en parametre de l'url
const queryString_url_id = window.location.search;

const leId = queryString_url_id.slice(4);
console.log(leId);

// appeler l'api avec la route /get 1 canape de l'api
fetch("http://localhost:3000/api/products" + "/" + leId)
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(canape) {
        console.log(canape);
        //on crée l'image du produit sélectionné
        var div = document.querySelector(".item__img");        
        var img = document.createElement("img");
        img.src = canape.imageUrl;
        img.alt = canape.altTxt;
        div.appendChild(img);
        //On applique le titre, le prix et la description
        var h1 = document.querySelector("#title");
        h1.innerText = canape.name;
        var span = document.querySelector("#price");
        span.innerText = canape.price;
        var p = document.querySelector("#description");
        p.innerText = canape.description;
        //A partir du data on renvoie une boucle pour chaque couleurs
        var selectionColors = document.querySelector("#colors");
        canape.colors.forEach(canapcolor => { 
            console.log(canapcolor);         
            var options =  document.createElement("option");
            options.value = canapcolor;
            options.innerText = canapcolor; 
            selectionColors.appendChild(options);
        });
        //On met le localStorage au button
        var buttonPrincipal = document.querySelector("#addToCart");
        buttonPrincipal.onclick = function() {
            var canapeObj = {
                id: canape._id,
                color: colors.value,
                quantite: quantity.value,
                price: canape.price * quantity.value,
            }
            var panier = JSON.parse(localStorage.getItem("canapes"));
            if (panier == null) {
                localStorage.setItem("canapes", JSON.stringify([canapeObj]));
            } /*else if ( var idemId = panier.id === "string" && var idemColor = panier.color === "string") {
                canapes.quantite = canapes.quantite.indexOf() + canapes.quantite.length;
                idemId.push("canapes.quantite");}*/
                else {
                panier.push(canapeObj); 
                localStorage.setItem("canapes", JSON.stringify(panier));               
            }
        };
    })
    .catch(function(err) {
        // Une erreur est survenue
    });
    