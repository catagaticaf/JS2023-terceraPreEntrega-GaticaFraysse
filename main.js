


// clase constructora para cargar los productos;

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

  let sillaGervasoni = new Producto(
    "Silla Gervasoni",
    30000,
    20,
    1,
    "silla",
    "sillaGervasoni.webp"
  );
  let sillaSofia = new Producto(
    "Silla Sofía",
    40000,
    15,
    2,
    "silla",
    "sillaSofia.webp"
  );
  let sillaLolita = new Producto(
    "Silla Lolita",
    50000,
    10,
    3,
    "silla",
    "sillaLolitagris.webp"
  );
  let sillaMonaco = new Producto(
    "Silla Mónaco",
    45000,
    12,
    4,
    "silla",
    "sillaMonaco.webp"
  );
  let sillaBamboo = new Producto(
    "Silla Bamboo",
    27000,
    15,
    5,
    "silla",
    "sillaBamboo.webp"
  );
  let sillaParis = new Producto(
    "Silla Paris",
    70000,
    10,
    6,
    "silla",
    "sillaParis.webp"
  );
  let sillaTundra = new Producto(
    "Silla Tundra",
    35000,
    8,
    7,
    "silla",
    "sillaTundra.webp"
  );
  let sillaMonacoBlanca = new Producto(
    "Silla Mónaco Blanca",
    45000,
    12,
    8,
    "silla",
    "sillaMonacoBlanca.webp"
  );

  productos.push(
    sillaGervasoni,
    sillaSofia,
    sillaLolita,
    sillaMonaco,
    sillaBamboo,
    sillaParis,
    sillaTundra,
    sillaMonacoBlanca
  );
  console.log(productos);
  return productos
}
cargarProductos();

//funcion de los botones para agregar al carrito
let carrito = [];

function agregarAlCarrito() {
	let productos = cargarProductos();
	let botones = document.getElementsByClassName("botones");
	for (const boton of botones) {
		boton.onclick = (e) => {
			console.log(`Se agrego al carrito! El id del producto seleccionado es ${e.target.id}`);
			let productoSeleccionado = productos.find((producto) => producto.id === parseInt(e.target.id));
			carrito.push(productoSeleccionado);
			console.log(carrito);
			localStorage.setItem("carrito", JSON.stringify(carrito));
		};
	}
}

function agregarCards() {
  let productos = cargarProductos();
  let container = document.getElementById("contenedor-cards");
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
function obtenerLocalStorage(){
  const carrito = JSON.parse(localStorage.getItem('carrito'))
  console.log(carrito)
}
obtenerLocalStorage()


