//document.getElementsByTagName("h1")[0].style.fontSize = "80px";
 
 $(document).ready(function(){
  
//aqui damos formato al header      
   
$("#header").addClass("well");
$("#tablah").addClass("bg-primary");   
$("#titulo").addClass("text-center");   
$("#tema").addClass("text-center");

//aqui damos el formato para el content
$("#content").addClass("well");  
//todas las imagenes deben ser responsive
$("img").addClass("img-responsive");
$("p ").addClass("text-justify");



//aqui damos formato al footer
$("#footer").addClass("well");  
$("#tablaf").addClass("bg-info");
$("#power").addClass("text-center");
$("#autor").addClass("text-center");

   
 });