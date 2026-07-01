async function cargarProductos() {

const { data, error } =
await supabaseClient
.from("productos")
.select("*");

if(error){
console.error(error);
return;
}

mostrarProductos(data);

}

function mostrarProductos(productos){

const contenedor =
document.getElementById("productos");

contenedor.innerHTML="";

productos.forEach(producto=>{

contenedor.innerHTML += `
<div class="card">

<img src="${producto.imagen}" alt="">

<div class="card-body">

<h3>${producto.nombre}</h3>

<p>${producto.descripcion}</p>

<div class="precio">
S/${producto.precio}
</div>

<button onclick="agregarCarrito(${producto.id})">
Agregar al carrito
</button>

</div>

</div>
`;

});

}

function agregarCarrito(id){

let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

carrito.push(id);

localStorage.setItem(
"carrito",
JSON.stringify(carrito)
);

alert("Producto agregado");

}

cargarProductos();