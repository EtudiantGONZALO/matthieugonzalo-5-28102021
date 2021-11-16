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
            console.log(canapcolor);         
            var options =  document.createElement("option");
            options.value = canapcolor;
            options.innerText = canapcolor; 
            selectionColors.appendChild(options);
        });
        //On met une balise <a> au button
        var button = document.querySelector(".item__content__addButton");
        var buttonA = document.createElement("a");
        buttonA.href = './cart.html' + '?id=' + canape._id;
        button.appendChild(buttonA);
        var buttonPrincipal = document.querySelector("#addToCart");
        buttonA.appendChild(buttonPrincipal);
        buttonA.onclick = function() {
            ajouterPanier(nameLS, alt, price, img, id, quantite, couleur);
        };
    })
    .catch(function(err) {
        // Une erreur est survenue
    });

    var input =  document.querySelector("#quantity");
        input.setAttribute("value", input.innerText);
    
    function ajouterPanier(nameLS, alt, price, img, id, quantite, couleur) {
        //on récupère l'objet monPanier : si il n'existe pas, je le crée, si il existe , je le modifie
        //On incrémente le button de l'id, la quantité et la couleur dans le Localstorage
        const monPanier = {
            nameLS: canape.name,
            alt: canape.altTxt,
            price: canape.price,
            img: canape.Url,
            id: canape._id,
            quantite: document.querySelector("#quantity").getAttribute("value"),
            color: document.querySelector("#colors").getAttribute("value")
        };
        localStorage.setItem("monPanier", JSON.stringify(monPanier));        
    };