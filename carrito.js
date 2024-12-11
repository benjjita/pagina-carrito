const menus = [{nombre: "Inicio", url: "index.html"},
    {nombre: "¿Quienes somos?", url: "quienes.html"},
    {nombre: "Contacto", url: "contacto.html"},
    {nombre: "Carrito", url: "carrito.html"},
]

function cargarmenu() {
let enlaces = document.getElementById("ulmenu")
for (const menu of menus) {
let lista = document.createElement("li")
lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
enlaces.appendChild(lista);
}
}
cargarmenu()  

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    let total = 0; // Inicializamos el total

    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `${productocarrito.id}`;
        const subtotal = productocarrito.cantidad * productocarrito.precio;
        total += subtotal; // Sumamos el subtotal al total

        lista.innerHTML = `
            <td><img src="${productocarrito.urlImagen}" width="50"></td>
            <td>${productocarrito.cantidad}</td>
            <td>${productocarrito.nombre}</td>
            <td>${productocarrito.precio}</td>
            <td>${subtotal}</td>
            <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">x</button></td>
        `;
        enlaces.appendChild(lista);
    }

    // Mostrar el total
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="4" style="text-align:right;"><strong>Total:</strong></td>
        <td colspan="2"><strong>$${total}</strong></td>
    `;
    enlaces.appendChild(totalRow);
}

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id);
    productocarritos = productocarritos.filter(producto => producto.id !== id);
    const enJSON = JSON.stringify(productocarritos);
    localStorage.setItem("carrito", enJSON);

    // Recalcular el carrito después de eliminar
    document.getElementById("tablacarrito").innerHTML = ""; // Limpiamos la tabla
    cargarcarrito(); // Recargamos los datos actualizados
}

cargarcarrito();

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id)
    productosActualizados = productocarritos.filter(producto => producto.id !== id);
    const enJSON    = JSON.stringify(productosActualizados);
    localStorage.setItem("carrito", enJSON)
}