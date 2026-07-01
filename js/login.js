async function login(){

 const email =
 document.getElementById("email").value;

 const password =
 document.getElementById("password").value;

 const { error } =
 await supabaseClient.auth
 .signInWithPassword({
  email,
  password
 });

 if(!error){

  window.location =
  "/adm-7xk92-zix-core-v26";

 }

}