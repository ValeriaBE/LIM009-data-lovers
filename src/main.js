const BuscarData = window.INJURIES;
/* Manejo del DOM */
const menuContact = document.getElementById("menu-de-contacto");
const searchButton = document.getElementById("search-header-btn");
const homeButton = document.getElementById("home-menu-btn");
const aboutButton = document.getElementById("about-menu-btn");
const contactButton = document.getElementById("contact-menu-btn");
const menuLogo = document.getElementById("menu-de-logo");
const menuPrincipal = document.getElementById("menu-principal");
const typeButton = document.getElementById("tipo-menu-btn");
const yearButton = document.getElementById("año-menu-btn");
const homeScreen = document.getElementById("home-screen");
const aboutScreen = document.getElementById("about-us-screen");
const contactScreen = document.getElementById("contact-us-screen");
const typeScreen = document.getElementById("type-accident-screen");
const yearScreen = document.getElementById("year-accident-screen");
let seleccionarAño = document.getElementById('Years');
let visualizarData = document.getElementById('datos');
let resultado = document.getElementById('resultado');

aboutScreen.style.display = "none";
contactScreen.style.display = "none";
typeScreen.style.display = "none";
yearScreen.style.display = "none";

homeButton.addEventListener("click", () => {
    homeScreen.style.display = "block";
    aboutScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    document.getElementById("data").innerHTML= window.search(INJURIES, 929);
});

aboutButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    yearScreen.style.display = "none";
    aboutScreen.style.display = "block";
});

contactButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    typeScreen.style.display = "none";
    yearScreen.style.display = "none";
    aboutScreen.style.display = "none";
    contactScreen.style.display = "block";
});

typeButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    yearScreen.style.display = "none";
    aboutScreen.style.display = "none";
    typeScreen.style.display = "block";
});

yearButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    aboutScreen.style.display = "none";
    yearScreen.style.display = "block";
});

//Búsqueda por año
visualizarData.addEventListener("click", () => {
  let yearValue = seleccionarAño.value;
  const resultData = window.data.consult(BuscarData, yearValue);
  let arrayData = Object.values(resultData);

  resultado.innerHTML = `<b>Year:  </b>${seleccionarAño.value.substr(0,4)}<br><br><b> Recreational: </b>${arrayData[0]} <br><b>Train:  </b>${arrayData[1]} `;
  return arrayData;
});
