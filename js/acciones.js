// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
function consulta()
{
	alert("Dentro");
	datos="";
    $.ajax({
		type: "POST",
		url: "http://192.168.1.176/libreria/buscarTodos.php",
		data: datos, 
		error: function() {
			alert("Error, no se puede conectar al servidor");
		},
		success: function(respuesta) {
         var datosLibros = JSON.parse(respuesta);
		 alert("libro: " + datosLibros.Libros[0].tituloLibro);
		}
	});
}
	
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
		consulta();
	});
}); 
});

