const staticDevCoffee = "CafeteriaUTM"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/burrito.jpg",
  "/images/cafe.jpg",
  "/images/comida.jpg",
  "/images/desayuno.jpg",
  "/images/energetico.jpg",
  "/images/flautas.jpg",
  "/images/fruta.jpg",
  "/images/jugo.jpg",
  "/images/licuado.jpg",
  "/images/Mollete.jpg",
  "/images/quesadilla.jpg",
  "/images/sincronizada.jpg",
  "/images/torta.jpg",
]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })