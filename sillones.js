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

  let sillonCubo = new Producto(
    "Sillón Cubo",
    530000,
    5,
    17,
    "sillon",
    "sillonCubo.webp"
  );
  let sillonLoli = new Producto(
    "Sillón Loli L",
    1000000,
    3,
    18,
    "sillon",
    "sillonLoliL.webp"
  );
  let sillonLondon = new Producto(
    "Sillón London",
    550000,
    6,
    19,
    "sillon",
    "sillonLondon.webp"
  );
  let sillonModularHollywood = new Producto(
    "Sillón Modular Hollywood",
    600000,
    6,
    20,
    "sillon",
    "sillonModularHollywood.webp"
  );
  let sillonRomaEsquinero = new Producto(
    "Sillón Roma Esquinero",
    400000,
    8,
    21,
    "sillon",
    "sillonRomaEsquinero.webp"
  );
  let sillonCatalina = new Producto(
    "Sillón Catalina",
    1250000,
    4,
    22,
    "sillon",
    "sillonCatalina.webp"
  );
  let sillonOval = new Producto(
    "Sillón Oval",
    800000,
    8,
    23,
    "sillon",
    "sillonOval.webp"
  );
  let sillonRound = new Producto(
    "Sillón Round",
    415000,
    7,
    24,
    "sillon",
    "sillonRound.webp"
  );

  productos.push(
    sillonCubo,
    sillonLoli,
    sillonLondon,
    sillonModularHollywood,
    sillonRomaEsquinero,
    sillonCatalina,
    sillonOval,
    sillonRound
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
      swal({
        title: 'El producto se agrego correctamente al carrito!',
        icon: 'success',
    });
      carrito.push(productoSeleccionado);
      console.log(carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  }
}
function agregarCards() {
  let productos = cargarProductos();
  let container = document.getElementById("contenedor-sillones");
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
