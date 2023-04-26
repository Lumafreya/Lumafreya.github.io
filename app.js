const container = document.querySelector(".container")
const coffees = [
    { name: "Desayunos", image: "Imagenes/Desayuno.jpg", },
    { name: "Comida", image: "Imagenes/Comida.jpg" },
    { name: "Tortas", image: "Imagenes/torta.jpg" },
    { name: "Quesadillas", image: "Imagenes/Quesadilla.jpg" },
    { name: "Sincronizada", image: "Imagenes/Sincronizada.jpg" },
    { name: "Molletes", image: "Imagenes/Mollete.jpg" },
    { name: "Energetico", image: "Imagenes/energetico.jpg" },
    { name: "Fruta", image: "Imagenes/Fruta.jpg" },
    { name: "Licuado", image: "Imagenes/licuado.jpg" },
    { name: "Jugo", image: "Imagenes/jugo.jpg" },
    { name: "Cafe", image: "Imagenes/tasa.jpg" },
    { name: "Burritos", image: "Imagenes/burrito.jpg" },
    { name: "Flautas", image: "Imagenes/flautas.jpg" },
]
const link = [{link: "paginas/${name}"}]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="Paginas/${name}/index.html">Pedir</a>
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
