const API_GATOS = "https://catfact.ninja/fact"
const API_WEATHER =
  "http://api.weatherstack.com/current?access_key=64a0326c9d5e0681a415d3ebc07c5164&query=Madrid"

const contenedor = document.querySelector(".container")
const btnTraerDatos = document.getElementById("btnTraerDatos")

const handleClick = () => {
  traerData();
};

btnTraerDatos.addEventListener("click", handleClick)

const traerData = () =>
  fetch(API_GATOS)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      contenedor.appendChild(document.createElement("p")).textContent = data.fact
    })
    .catch((error) => {
      console.log(error)
    });
