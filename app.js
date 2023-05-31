const traerDatos = () => {
  fetch(
    "lhttp://api.weatherstack.com/current?access_key=64a0326c9d5e0681a415d3ebc07c5164&query=Madrid"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Se ha producido un error:", error);
    });
};

const handlerClickBtnTraerDatos = () => {
  console.log("Click");
};

const btnTrerDatos = document.getElementById("btnTraerDatos");
btnTrerDatos.addEventListener("click", handlerClickBtnTraerDatos);

const container = document.querySelector(".container");
container.innerHTML = "Hola Mundo";

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
