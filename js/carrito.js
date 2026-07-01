let carrito =
JSON.parse(
 localStorage.getItem("carrito")
) || [];

document.getElementById("carrito")
.innerHTML =
carrito.join("<br>");

function enviarWhatsApp(){

 let mensaje =
 "Hola, quiero comprar:%0A";

 carrito.forEach(id=>{

  mensaje +=
  "- Producto ID: "+id+"%0A";

 });

 window.open(
 `https://wa.me/51926027110?text=${mensaje}`
 );

}