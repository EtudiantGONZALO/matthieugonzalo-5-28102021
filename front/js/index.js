// Declaration de la variable et envoi de la réponse de l'api au format JSON
let kanapdata = [];

const fetchkanap = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
      kanapdata = promise;
      console.log(kanapdata);
    });
};
  

const kanapdisplay = async () => {
  await kanapdata();
  document.getElementById("items").innerHTML = kanapdata.map(kanap)
    `<a href="${kanap._id}">
      <article>
        <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
        <h3 class="productName">${kanap.name}</h3>
        <p class="productDescription">${kanap.description}</p>
      </article>
    </a>`;
}

kanapdisplay();
