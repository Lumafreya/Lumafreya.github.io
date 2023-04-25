const container = document.querySelector(".container")
const coffees = [
    { name: "Desayunos", image: "Imagenes/desayuno.jpg" },
    { name: "Comida", image: "Imagenes/comida.jpg" },
    { name: "Tortas", image: "Imagenes/Torta.jpg" },
    { name: "Quesadillas", image: "Imagenes/quesadilla.jpg" },
    { name: "Sincronizada", image: "Imagenes/sincronizada.jpg" },
    { name: "Molletes", image: "Imagenes/mollete.jpg" },
    { name: "Energetico", image: "Imagenes/energetico.jpg" },
    { name: "Fruta", image: "Imagenes/fruta.jpg" },
    { name: "Licuado", image: "Imagenes/licuado.jpg" },
    { name: "Jugo", image: "Imagenes/jugo.jpg" },
    { name: "Bebidas calientes", Image: "imagenes/cafe.jpg" },
    { name: "Burritos", image: "Imagenes/burrito.jpg" },
    { name: "Flautas", image: "Imagenes/flautas.jpg" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Pedir</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
