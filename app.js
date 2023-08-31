class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito{
    constructor(total){
        this.total = total;
    }
}

let totalAcumulado = 0; 

let seleccion = prompt("Bienvenido, ¿Deseas hacer algún pedido? ¿SI o NO?")

while(seleccion.toUpperCase() != "SI" && seleccion.toUpperCase() != "NO"){
    alert("Por favor ingresa SI o NO")
    seleccion = prompt("Bienvenido, ¿Deseas hacer algún pedido? ¿SI o NO?") 
}

if (seleccion.toUpperCase() == "SI"){

    const continuarComprando = iniciarVenta();

    finalizarVenta(continuarComprando);
        
} else {
    alert("¡ADIOS!")
}

function iniciarVenta(){

    const producto1 = new Producto (1, "Aretas", 30000);
    const producto2 = new Producto (2, "Collar", 20000);
    const producto3 = new Producto (3, "Earcuffs", 15000);
    const producto4 = new Producto (4, "Maquillaje", 40000);

    const listaDeProductos = [producto1, producto2, producto3, producto4];

    const catalogo = construirCatalogo(listaDeProductos);

    const productoSeleccionado = mostrarCatalogo(catalogo, listaDeProductos);

    const cantidadProducto = pedirCantidad(productoSeleccionado);

    const carrito = añadirAlCarrito(productoSeleccionado, cantidadProducto);

    const continuarComprando = totalizarCompra(carrito.total);

    return continuarComprando;

}

function construirCatalogo(productos){
    let listaDeProductos = "Seleccione el número del producto que desea comprar: \n";
    productos.forEach(producto =>{
        listaDeProductos = listaDeProductos + producto.codigo + ". " + producto.nombre + " $" + producto.precio + "\n";
    });
    return listaDeProductos;
}

function mostrarCatalogo(catalogo, listaDeProductos){
    const codigoProducto = prompt(catalogo);
    const productoSeleccionado = listaDeProductos.find(producto =>
        producto.codigo == codigoProducto
    );
    return productoSeleccionado;
}

function pedirCantidad(productoSeleccionado){
    const cantidadProducto = Number(prompt("Seleccionaste el producto: " + productoSeleccionado.codigo +
    ". " + productoSeleccionado.nombre + " $" + productoSeleccionado.precio + "\n" + "Indique la cantidad"));
    return cantidadProducto;
}

function añadirAlCarrito(productoSeleccionado, cantidad){
    const totalVenta = productoSeleccionado.precio * cantidad;
    totalAcumulado += totalVenta; 
    const carrito = new Carrito(totalAcumulado); 
    return carrito;
}

function totalizarCompra(totalVenta){
    const continuarComprando = prompt("El total de tu pedido es: $" + totalVenta +
        "\n" + "¿Deseas seguir comprando? SI o NO");
    return continuarComprando;
}

function finalizarVenta(continuarComprando){
    if (continuarComprando.toUpperCase() == "SI"){

        const continuarComprandoFinal = iniciarVenta();
        finalizarVenta(continuarComprandoFinal);
        
    } else {
        alert("¡Gracias por tu compra!");
    }
}
