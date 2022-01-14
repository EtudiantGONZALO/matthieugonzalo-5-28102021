//récupération dans une variable l'id passé en parametre de l'url
const queryString_orderId = window.location.search;
const idFinal = queryString_orderId.slice(4);

//On recupere l'order-ID et on le mets dans la balise span
const idNumero = document.querySelector("#orderId");
idNumero.innerText = idFinal;

//On efface le localStorage
localStorage.clear();