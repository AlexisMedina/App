// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
function consulta()
{
	datos="";
    $.ajax({
		type: "POST",
		url: "http://192.168.1.176/libreria/movil.php",
		data: datos, 
		error: function() {
			alert("Error, no se puede conectar al servidor");
		},
		success: function(respuesta) {
			alert(respuesta);
		}
	});
}
	
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
		consulta();
	});
}); 
});

