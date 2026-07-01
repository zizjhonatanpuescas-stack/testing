async function guardarProducto(){

const nombre =
document.getElementById("nombre").value;

const descripcion =
document.getElementById("descripcion").value;

const precio =
document.getElementById("precio").value;

const imagen =
document.getElementById("imagen").value;

const stock =
document.getElementById("stock").value;

const { error } =
await supabaseClient
.from("productos")
.insert([{
 nombre,
 descripcion,
 precio,
 imagen,
 stock
}]);

if(error){

 alert(error.message);

 return;

}

alert("Producto guardado");

}