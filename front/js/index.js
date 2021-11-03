

// Declaration de la variable et envoi de la réponse de l'api au format JSON
kanapfetch = async () => {
  kanapdata = await fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
};


kanapcards = async () => {
  await kanapfetch();
  document.getElementById("items").innerHTML = (
    kanapdata.map(kanapdisplay =>
      `<a href="./product.html?id=${kanapdisplay._id}">
        <article>
          <img src="${kanapdisplay.imageUrl}" alt="${kanapdisplay.altTxt}">
          <h3 class="productName">${kanapdisplay.name}</h3>
          <p class="productDescription">${kanapdisplay.description}</p>
        </article>
      </a>`
    )
  );
}

kanapcards();
