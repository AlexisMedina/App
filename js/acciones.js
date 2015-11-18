// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
function consulta()
{
	datos="";
    $.ajax({
		type: "POST",
		url: "192.168.1.30/procesar.php",
		data: datos
	}).done(function(mensaje){
		alert(mensaje);
	});
}
	
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
		consulta();
	});
}); 
});

