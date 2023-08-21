let contenedorCarrito = document.getElementById("contenedor-carrito");


const pintarCarrito = carrito => {
  const tablaCarrito = document.createElement('div')
  tablaCarrito.className = 'table';
  tablaCarrito.innerHTML = `
  <table class="table">
  <thead>
  <tr>
    <th scope="col">Cantidad</th>
    <th scope="col">Producto</th>
    <th scope="col">Precio</th>
    <th scope="col"><div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-light">-</button>
    <button type="button" class="btn btn-light">+</button>
  </div></th>
    <th scope="col">Total</th>
  </tr>
</thead>
<tbody id="bodyCarrito">
<tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
</tbody>
</table>
  `
  contenedorCarrito.appendChild(tablaCarrito)
  //contenedorCarrito.innerHTML = '' esto no, hace que la tabla no apareza!!
  document.getElementById('bodyCarrito')
  carrito.forEach(producto => {
    let cardCarrito = document.createElement("div");
    cardCarrito.className = "table"
    cardCarrito.innerHTML = 
   // `
    //<img src="${producto.img}">
    //<h3>${producto.nombre}</h3>
    //<p>${producto.precio}</p>
   // `
    `
    <tr>
              <th scope="row">${producto.cantidad}</th>
              <td>${producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>${(producto.precio * producto.cantidad)}</td>
              <img src="./img/${producto.img}" class="card-img-top" alt="...">
              </tr>


    
      `
    tablaCarrito.appendChild(cardCarrito)
  })
}

//const sumaCarrito = carrito.reduce((acc,el)=> acc + el.precio * el.cantidad, 0)




// 👇 TOMO LOS DATOS DEL STORAGE Y LOS PASO POR PARÉMTRO A LA FUNCION QUE LOS RENDERIZARÁ EN EL DOM
function obtenerLocalStorage() {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(carrito);
  pintarCarrito(carrito)

}
obtenerLocalStorage();