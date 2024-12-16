const menus = [
  {nombre: "Inicio", url: "index.html"},
  {nombre: "¿Quienes somos?", url: "quienes.html"},
  {nombre: "Contacto", url: "contacto.html"},
  {nombre: "Carrito", url: "carrito.html"},
];

let productosEnCarrito = 0;

function cargarmenu() {
  let enlaces = document.getElementById("ulmenu");
  for (const menu of menus) {
      let lista = document.createElement("li");
      if (menu.nombre === "Carrito") {
          lista.innerHTML = `<a href=${menu.url} id="carrito-link"><div id="carrito">
                              <div id="carrito-logo"></div>
                              <span>Carrito</span>
                              <div id="carrito-globo"></div>
                            </div></a>`;
      } else {
          lista.innerHTML = `<a href=${menu.url}>${menu.nombre}</a>`;
      }
      enlaces.appendChild(lista);
  }
}

function agregarAlCarrito() {
  productosEnCarrito++;
  actualizarCarrito();
}

function actualizarCarrito() {
  let globo = document.getElementById("carrito-globo");

  if (productosEnCarrito > 0) {
      globo.style.visibility = 'visible';
      globo.textContent = productosEnCarrito;
  } else {
      globo.style.visibility = 'hidden';
  }
}

cargarmenu();

const productos = [
    { 
      id: 1,
      nombre: "Creatina Star nutrition",
      urlImagen: "img/creatina-star.jpg",
      precio: 50000,
      descripcion: "La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación.",
      stock: 15
    },
    {
      id: 2,
      nombre: "Proteina Star Nutrition",
      urlImagen: "img/proteina-star.png",
      precio: 90000,
      descripcion: "Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto.",
      stock: 8
    },
    {
      id: 3,
      nombre: "Pre-entreno Star Nutrition",
      urlImagen: "img/pre-entreno-star.jpg",
      precio: 25000,
      descripcion: "Aumento de rendimiento físico. Mayor flujo sanguíneo a músculos.",
      stock: 25
    },
    {
      id: 4,
      nombre: "Proteina ENA",
      urlImagen: "img/proteina-ena.png",
      precio: 60000,
      descripcion: "",
      stock: 12
    },
    {
      id: 5,
      nombre: "Creatina ENA",
      urlImagen: "img/creatina-ena.jpg",
      precio: 120000,
      descripcion: "",
      stock: 7
    },
    {
      id: 6,
      nombre: "Ganador de peso Star Nutrition",
      urlImagen: "img/ganador-star.jpg",
      precio: 15000,
      descripcion: "Mutant Mass es un ganador de peso con alto contenido de proteínas. Aumentar el volumen muscular requiere entrenamiento duro y una adecuada nutrición. Cada cuerpo es diferente y algunos requieren de un extra para lograr su objetivo.",
      stock: 30
    },
    {
      id: 7,
      nombre: "Straps de cinta",
      urlImagen: "img/straps.jpg",
      precio: 8000,
      descripcion: "",
      stock: 20
    },
    {
      id: 8,
      nombre: "Monster",
      urlImagen: "img/monster.jpg",
      precio: 45000,
      descripcion: " ",
      stock: 10
    },
    {
      id: 9,
      nombre: "Pre-entreno ENA",
      urlImagen: "img/pre-entreno-ena.jpeg",
      precio: 12000,
      descripcion: " ",
      stock: 18
    },
    {
      id: 10,
      nombre: "Magnesio",
      urlImagen: "img/magnesio.jpg",
      precio: 5000,
      descripcion: " ",
      stock: 40
    }
  ];
  
  function cargarproductos() {
    let enlaces = document.getElementById("boxproductos")
    for (const producto of productos) {
        let lista = document.createElement("div")
        lista.innerHTML =`  <h3>${producto.nombre}</h3>
                            <img src=${producto.urlImagen} alt="" width="100">
                            <p>${producto.precio}</p>
                            <button onclick="verdetalle('${producto.id}')">Detalles</button>
                        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  const enJSON    = JSON.stringify(buscarProducto);
  localStorage.setItem("detalleproducto", enJSON)
  window.location.href="detalle.html"
}

