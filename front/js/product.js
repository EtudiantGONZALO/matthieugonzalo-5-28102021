//récupération dans une variable l'id passé en parametre de l'url
const queryString_url_id = window.location.search;

const idPrimaire = queryString_url_id.slice(4);

// appeler l'api avec la route /get 1 canape de l'api
fetch("http://localhost:3000/api/products" + "/" + idPrimaire)
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(product) {

        //on crée l'image du produit sélectionné
        var div = document.querySelector(".item__img");        
        var img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = product.altTxt;
        div.appendChild(img);

        //On applique le titre, le prix et la description
        var h1 = document.querySelector("#title");
        h1.innerText = product.name;
        var span = document.querySelector("#price");
        span.innerText = product.price;
        var p = document.querySelector("#description");
        p.innerText = product.description;

        //A partir du data on renvoie une boucle pour chaque couleurs
        product.colors.forEach(productColor => { 
            var selectionColors = document.querySelector("#colors");
            var options =  document.createElement("option");
            options.value = productColor;
            options.innerText = productColor; 
            selectionColors.appendChild(options);
        });

        //On met le localStorage au button
        var buttonPrincipal = document.querySelector("#addToCart");
        buttonPrincipal.onclick = function() {

            //On crée un objet canapeObj
            var canapeObj = {
                id: product._id,
                color: colors.value,
                quantite: Number(quantity.value),
                price: product.price * Number(quantity.value),
            }

            //On crée une variable dans le localStorage
            var panier = JSON.parse(localStorage.getItem("product-ID"));

            //Si le panier est vide on crée le panier
            if (panier == null) {
                localStorage.setItem("product-ID", JSON.stringify([canapeObj]));
            } else {
                    var leCanapeExiste = false;

                    //Si le canape existe avec le meme id et la meme couleur
                    //On augmente sa quantité
                    panier.forEach((canap) => {
                        if (canap.id === canapeObj.id && canap.color === canapeObj.color) {
                            canap.quantite += canapeObj.quantite;
                            canap.price = canap.quantite * product.price;
                            leCanapeExiste = true;                                                      
                        }
                    });

                    //Si le canape n'existe pas on l'ajoute au localStorage
                    if (leCanapeExiste === false) {
                        panier.push(canapeObj);                
                    }
                    localStorage.setItem("product-ID", JSON.stringify(panier)); 
                }
            }
        })
    .catch(function(err) {
        // Une erreur est survenue
    });
    