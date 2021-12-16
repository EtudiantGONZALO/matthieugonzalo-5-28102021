// Declaration de la variable et envoi de la réponse de l'api au format JSON
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(canapes) {

    //Déclaration de la variable section qui renvoie à l'id "items"
    var section = document.querySelector(".items");

    //A partir du data on renvoie une boucle de chaque canapé
    canapes.forEach(canape => {

      //On crée une balise <a> et une balise <article> que l'on apparente
      var canapeA = document.createElement("a");
      var article = document.createElement("article");
      canapeA.appendChild(article);

      //On affecte au href de la balise <a> un lien
      canapeA.href = './product.html' + '?id=' + canape._id;

      //On crée une variable img, h3 et p auquels on attribut des liens
      var img =  document.createElement("img");
      img.src = canape.imageUrl;
      img.alt = canape.altTxt;
      var h3 = document.createElement("h3");
      h3.classList.add("productName");
      h3.innerText = canape.name;
      var p = document.createElement("p");
      p.classList.add("productDescription");
      p.innerText = canape.description;
      
      //On apparente chaque balise a son element parent
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);
      section.appendChild(canapeA);     
    });
  })
  .catch(function(err) {
    // Une erreur est survenue
  });