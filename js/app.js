//verificar si el localstorage tiene datos
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

//chequear si el arreglo listaPeliculas tiene algo
if(listaPeliculas.length > 0){
    //entonces dibujo las cards
    listaPeliculas.map((pelicula)=>{
        crearColumna(pelicula)
    })
}else{
    //mostrar un mensaje intuitivo para el usuario
}

function crearColumna(pelicula){
//traer el elemento padre de las columnas
// dibujar una columna con su respectiva card
}