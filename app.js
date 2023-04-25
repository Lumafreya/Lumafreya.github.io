const container = document.querySelector(".container")
const coffees = [
    { name: "Desayunos", image: "imagenes/desayuno.jpg" },
    { name: "Comida", image: "imagenes/comida.jpg" },
    { name: "Tortas", image: "imagenes/Torta.jpg" },
    { name: "Quesadillas", image: "imagenes/quesadilla.jpg" },
    { name: "Sincronizada", image: "imagenes/sincronizada.jpg" },
    { name: "Molletes", image: "imagenes/mollete.jpg" },
    { name: "Energetico", image: "imagenes/energetico.jpg" },
    { name: "Fruta", image: "imagenes/fruta.jpg" },
    { name: "Licuado", image: "imagenes/licuado.jpg" },
    { name: "Jugo", image: "imagenes/jugo.jpg" },
    { name: "Bebidas calientes", image: "imagenes/cafe.jpg" },
    { name: "Burritos", image: "imagenes/burrito.jpg" },
    { name: "Flautas", image: "imagenes/flautas.jpg" },
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