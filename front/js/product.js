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
        console.log(canapes);
        //on crée l'image du produit sélectionné
        var div = document.querySelector(".item_img");        
        var img = document.createElement("img");
        img.src = canape.imageUrl;
        img.alt = canape.altTxt;
        img.appenchild(div);
        //On applique le titre, le prix et la description
        var h1 = document.querySelector(".title");
        h1.innerText = canape.name;
        var span = document.querySelector(".price");
        span.innerText = canape.price;
        var p = document.querySelector(".description");
        p.innerText = canape.description;
        //A partir du data on renvoie une boucle pour chaque couleurs
        var select = document.querySelector(".colors");
        canapes.colors.foreach(canape => {            
            var option =  document.createElement("option");
            option.value = canape.colors;
            option.innerText = canape.colors;
            option.appendChild(select);
        });        
    })
    .catch(function(err) {
        // Une erreur est survenue
      });