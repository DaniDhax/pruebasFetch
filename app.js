
const API_GATOS = "https://catfact.ninja/fact"
const API_WEATHER = "http://api.weatherstack.com/current?access_key=64a0326c9d5e0681a415d3ebc07c5164&query=Madrid"

const container = document.querySelector(".container");

const traerDatosAPI1 = () => {
  fetch(
    API_GATOS
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      container.innerHTML = data.fact;
    })
    .catch((error) => {
      console.log("Se ha producido un error:", error);
    });
};

const handlerClickBtnTraerDatos = () => {
  console.log("Click")
  traerDatosAPI1()
};


const btnTrerDatos = document.getElementById("btnTraerDatos");
btnTrerDatos.addEventListener("click", handlerClickBtnTraerDatos);


// fetch ('URL')
//     .then (response => {
//         // Hacer cosas
//         return response.json()
//     })
//     .then (data => {
//         // Hacer cosas
//     })
//     .catch (error => {
//         // Hacer cosas con el error
//     })
