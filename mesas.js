function cargarProductos() {
  const productos = [];
  class Producto {
    constructor(nombre, precio, stock, id, tipo, img) {
      this.nombre = nombre;
      this.precio = precio * 1.21;
      this.stock = stock;
      this.id = id;
      this.tipo = tipo;
      this.img = img;
    }
  }

  let mesaCanela = new Producto(
    "Mesa Canela",
    700000,
    5,
    9,
    "mesa",
    "mesaCanela.webp"
  );
  let mesaOliva = new Producto(
    "Mesa Oliva Zoita",
    950000,
    3,
    10,
    "mesa",
    "mesaOlivaZoita.webp"
  );
  let mesaAlaska = new Producto(
    "Mesa Alaska Paraiso",
    550000,
    6,
    11,
    "mesa",
    "mesaAlaskaParaiso.webp"
  );
  let mesaPatagonia = new Producto(
    "Mesa Patagonia Petiribi",
    690000,
    6,
    12,
    "mesa",
    "mesaPatagoniaPetiribi.webp"
  );
  let mesaSol = new Producto(
    "Mesa Sol Mármol",
    695000,
    8,
    13,
    "mesa",
    "mesaSolMarmol.webp"
  );
  let mesaManhattan = new Producto(
    "Mesa Manhattan",
    250000,
    10,
    14,
    "mesa",
    "mesaManhattan.webp"
  );
  let mesaAndes = new Producto(
    "Mesa Andes Álamo",
    400000,
    8,
    15,
    "mesa",
    "mesaAndesAlamo.webp"
  );
  let mesaAlma = new Producto(
    "Mesa Alma Zoita",
    820000,
    3,
    16,
    "mesa",
    "mesaAlmaZoita.webp"
  );

  productos.push(
    mesaCanela,
    mesaOliva,
    mesaAlaska,
    mesaPatagonia,
    mesaSol,
    mesaManhattan,
    mesaAndes,
    mesaAlma
  );
  console.log(productos);
  return productos;
}
cargarProductos();

//funcion de los botones para agregar al carrito
let carrito = [];

function agregarAlCarrito() {
  let productos = cargarProductos();
  let botones = document.getElementsByClassName("botones");
  for (const boton of botones) {
    boton.onclick = (e) => {
      console.log(
        `Se agrego al carrito! El id del producto seleccionado es ${e.target.id}`
      );
      let productoSeleccionado = productos.find(
        (producto) => producto.id === parseInt(e.target.id)
      );
      carrito.push(productoSeleccionado);
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  }
}
function agregarCards() {
  let productos = cargarProductos();
  let container = document.getElementById("contenedor-mesas");
  for (const producto of productos) {
    let card = document.createElement("div");
    card.innerHTML = `
      <div class="col">
            <div class="card">
              <img src="./img/${producto.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-light botones" id="${producto.id}">Agregar al carrito</a>
              </div>
            </div>
          </div>
      `;
    container.appendChild(card);
  }
}
agregarCards();
agregarAlCarrito();
//local storage
function obtenerLocalStorage() {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(carrito);
}
obtenerLocalStorage();
