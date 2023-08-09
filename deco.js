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

    let espejoCipresRustico = new Producto(
    "Espejo Ciprés Rústico",
    190000,
    15,
    25,
    "deco",
    "espejoCipresRustico.webp"
    );
    let espejoOrganic = new Producto(
    "Espejo Organic",
    22000,
    17,
    26,
    "deco",
    "espejoOrganic.webp"
    );
    let bandejaDesayuno = new Producto(
    "Bandeja Desayuno",
    19000,
    10,
    27,
    "deco",
    "bandejaDesayuno.webp"
    );
    let bandejaOrganizadora = new Producto(
    "Bandeja Organizadora",
    19000,
    12,
    28,
    "deco",
    "bandejaOrganizadora.webp"
    );
    let bandejaClaire = new Producto(
    "Bandeja Claire",
    15000,
    15,
    29,
    "deco",
    "bandejaClaire.webp"
    );
    let portaUtensiliosRound = new Producto(
    "Porta Utensilios Round",
    11200,
    10,
    30,
    "deco",
    "portaUtensiliosRound.webp"
    );
    let canastosLove = new Producto(
    "Canastos Love",
    15200,
    8,
    31,
    "deco",
    "canastosLove.webp"
    );
    let macetaNature = new Producto(
    "Maceta Nature",
    25000,
    12,
    32,
    "deco",
    "macetaNature.webp"
    );
    let cuadroDreams = new Producto(
    "Cuadro Dreams",
    72000,
    9,
    33,
    "deco",
    "cuadroDreams.webp"
    );
    let cuadroAbstract = new Producto(
    "Cuadro Abstract",
    160000,
    3,
    34,
    "deco",
    "cuadroAbstract.webp"
    );
    let cuadroWater = new Producto(
    "Cuadro Water",
    155000,
    6,
    35,
    "deco",
    "cuadroWater.webp"
    );
    let hornilloAromatico = new Producto(
    "Hornillo Aromático",
    14000,
    12,
    36,
    "deco",
    "hornilloAromatico.webp"
    );
    let cuencoMaderaPetrona = new Producto(
    "Cuenco Petrona de Madera",
    14500,
    7,
    37,
    "deco",
    "cuencoMaderaPetrona.webp"
    );
    let jarronCeramica = new Producto(
    "Jarrón Cerámica",
    12000,
    5,
    38,
    "deco",
    "jarronCeramica.webp"
    );
    let floreroLucy = new Producto(
    "Florero Lucy",
    25000,
    10,
    39,
    "deco",
    "floreroLucy.webp"
    );
    let velaAromatica = new Producto(
    "Vela Aromática",
    3200,
    18,
    40,
    "deco",
    "velaAromatica.webp"
    );
    let velaJulieta = new Producto(
    "Vela Julieta",
    7800,
    14,
    41,
    "deco",
    "velaJulieta.webp"
    );
    let mantaRustica = new Producto(
    "Manta Rústica",
    20000,
    11,
    42,
    "deco",
    "mantaRustica.webp"
    );
    let mantaNatural = new Producto(
    "Manta Natural",
    25000,
    9,
    43,
    "deco",
    "mantaNatural.webp"
    );
    let adornoCeramicaNegro = new Producto(
    "Adorno Cerámica Negro",
    5800,
    10,
    44,
    "deco",
    "adornoCeramicaNegro.webp"
    );
    productos.push(
    espejoCipresRustico,
    espejoOrganic,
    bandejaDesayuno,
    bandejaOrganizadora,
    bandejaClaire,
    portaUtensiliosRound,
    canastosLove,
    macetaNature,
    cuadroDreams,
    cuadroAbstract,
    cuadroWater,
    hornilloAromatico,
    cuencoMaderaPetrona,
    jarronCeramica,
    floreroLucy,
    velaAromatica,
    velaJulieta,
    mantaRustica,
    mantaNatural,
    adornoCeramicaNegro
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
    let container = document.getElementById("contenedor-deco");
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
