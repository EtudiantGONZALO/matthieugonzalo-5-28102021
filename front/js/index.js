// Declaration de la variable et envoi de la réponse de l'api au format JSON
var kanapfetch = async () => {
  await fetch("http://localhost:3000/api/products")
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
    })
}


const kanapdisplay = async () => {
  await kanapfetch();
  document.getElementById("items").innerHTML = kanapdata.map(kanap)
    `<a href="${kanap._id}">
      <article>
        <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
        <h3 class="productName">${kanap.name}</h3>
        <p class="productDescription">${kanap.description}</p>
      </article>
    </a>`;
}

kanapdisplay ();
