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
            var options =  document.createElement("option");
            options.value = canapcolor.colors;
            options.innerText = canapcolor.colors; 
            selectionColors.appendChild(options);
        });
        
        //On incrémente le button de l'id, la quantité et la couleur dans le Localstorage
        localStorage.canapcolor = options.innerTxt;
        localStorage.id = canape._id;
        var nombre = document.querySelector("#quantity");
        localStorage.quantite = nombre.innerText;
        localStorage["canapcolor", "id", "quantite"] = button.focus;
    })
    .catch(function(err) {
        // Une erreur est survenue
    });