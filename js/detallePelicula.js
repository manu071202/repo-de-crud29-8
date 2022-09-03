//tomar el parameyro de url
let parametro= window.location.search
console.log(parametro)

let urlparametro = new URLSearchParams(parametro)
console.log(urlparametro.get('codigo'))


//buscar dentro del local storage la pelicula que tiene el mismo codigo
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || []
let peliBuscada = listaPeliculas.find((pelicula)=>pelicula.codigo === urlparametro.get('codigo'))
console.log(peliBuscada)


//dibujar la card con los datos de la pelicula

let seccionDetalle = document.querySelector('#seccionDetalle');
 seccionDetalle.innerHTML+=
`<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${peliBuscada.imagen}" class="img-fluid rounded-start" alt="${peliBuscada.titulo}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${peliBuscada.titulo}</h5>
                <p class="${peliBuscada.descipcion}</p>
                <p class="${peliBuscada.genero}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          </div>`