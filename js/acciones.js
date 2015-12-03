// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
function consulta()
{
	alert("Dentro");
	datos="clave=" + $('#txtclave').val();
    $.ajax({
		type: "POST",
		url: "http://192.168.1.67/libreria/buscarTodos.php",
		data: datos, 
		error: function() {
			alert("Error, no se puede conectar al servidor");
		},
		success: function(respuesta) {
			alert(respuesta);
         var datosLibros = JSON.parse(respuesta);
		 $('#contenido').empty();
		 
		 $(':mobile-pagecontainer').pagecontainer('change', '#listado', {
			transition: 'pop' 
		 });
		 for (var x=0; x<datosLibros.Libros.length; x++) {
			 $('#contenido').append("<div><div><div style='display:inline-block'><img src='http://192.168.1.67/proyecto/recursos/imagenes/libros/" + datosLibros.Libros[x].claveLibro + ".jpg' width='20%' height='auto' /></div><div style='display:inline-block' align='center'><h1>" + datosLibros.Libros[x].tituloLibro + "</h1><br><h2>" + datosLibros.Libros[x].autorLibro + "</h2><div style='display:inline-block' align='center'><h3>Editorial: " + datosLibros.Libros[x].editorialLibro + "</h3></div><div style='display:inline-block' align='center'><h3>Número de paginas: " + datosLibros.Libros[x].paginasLibro + "</h3></div></div></div><div align='center'><h2>Precio: " + datosLibros.Libros[x].precioventa + "</h2></div>   <div>     <h2>Sinopsis:   </h2><br><center><p>" + datosLibros.Libros[x].sinopsisLibro + "</p></center><br><center><h2>Genero: " + datosLibros.Libros[x].generoLibro + "</h2> </center></div></div>");
		 }
		 
		}
	});
}
	
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
		consulta();
	});
}); 
});

