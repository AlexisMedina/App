// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
function consulta()
{ 
	alert("Dentro");
	datos;
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
		 for (var x=0; x<datosLibros.Libros.length; x++) { 6
			 $('#contenido').append("<div><div align='center'><div style='display:inline-block' align='center'><img src='http://192.168.1.67/proyecto/recursos/imagenes/libros/" + datosLibros.Libros[x].claveLibro + ".jpg' width='60%' height='auto' /></div><div style='display:inline-block' align='center'><h1>" + datosLibros.Libros[x].tituloLibro + "</h1><br><h2>" + datosLibros.Libros[x].autorLibro + "</h2><div style='display:inline-block' align='center'><h3>Editorial: " + datosLibros.Libros[x].editorialLibro + "</h3></div><div style='display:inline-block' align='center'><h3>Número de paginas: " + datosLibros.Libros[x].paginasLibro + "</h3></div></div></div><div align='center'><h2>Precio: " + datosLibros.Libros[x].precioventa + "</h2></div>   <div> <br><center><h2>Genero: " + datosLibros.Libros[x].generoLibro + "</h2> </center></div></div>");
		 } 
		 
		} 
	}); 
}

function consultatitulo()
{ 
	alert("Dentro titulo");
	datos="titulo=" + $('#txttitulo').val();
	alert(datos);
    $.ajax({  
		type: "POST",
		url: "http://192.168.1.67/libreria/buscarTitulo.php",
		data: datos, 
		error: function() {  
			alert("Error, no se puede conectar al servidor");
		}, 
		success: function(respuesta) { 
			alert(respuesta);
         var datosLibros = JSON.parse(respuesta);
		 $('#contenido2').empty();
		 
		 $(':mobile-pagecontainer').pagecontainer('change', '#titulo2', { 
			transition: 'pop' 
		 });  
		 for (var x=0; x<datosLibros.Libros.length; x++) { 6
			 $('#contenido2').append("<div><div align='center'><div style='display:inline-block' align='center'><img src='http://192.168.1.67/proyecto/recursos/imagenes/libros/" + datosLibros.Libros[x].claveLibro + ".jpg' width='60%' height='auto' /></div><div style='display:inline-block' align='center'><h1>" + datosLibros.Libros[x].tituloLibro + "</h1><br><h2>" + datosLibros.Libros[x].autorLibro + "</h2><div style='display:inline-block' align='center'><h3>Editorial: " + datosLibros.Libros[x].editorialLibro + "</h3></div><div style='display:inline-block' align='center'><h3>Número de paginas: " + datosLibros.Libros[x].paginasLibro + "</h3></div></div></div><div align='center'><h2>Precio: " + datosLibros.Libros[x].precioventa + "</h2></div>   <div> <br><center><h2>Genero: " + datosLibros.Libros[x].generoLibro + "</h2> </center></div></div>");
		 } 
		 
		} 
	}); 
}


function consultaautor()
{ 
	alert("Dentro autor");
	var datos="autor=" + $('#txtautor').val();
	alert(datos);
    $.ajax({  
		type: "POST",
		url: "http://192.168.1.67/libreria/buscarAutor.php",
		data: datos, 
		error: function() {  
			alert("Error, no se puede conectar al servidor");
		}, 
		success: function(respuesta) { 
			alert(respuesta);
         var datosLibros = JSON.parse(respuesta);
		 $('#contenido3').empty();
		 
		 $(':mobile-pagecontainer').pagecontainer('change', '#autor2', { 
			transition: 'pop' 
		 });  
		 for (var x=0; x<datosLibros.Libros.length; x++) { 6
			 $('#contenido3').append("<div><div align='center'><div style='display:inline-block' align='center'><img src='http://192.168.1.67/proyecto/recursos/imagenes/libros/" + datosLibros.Libros[x].claveLibro + ".jpg' width='60%' height='auto' /></div><div style='display:inline-block' align='center'><h1>" + datosLibros.Libros[x].tituloLibro + "</h1><br><h2>" + datosLibros.Libros[x].autorLibro + "</h2><div style='display:inline-block' align='center'><h3>Editorial: " + datosLibros.Libros[x].editorialLibro + "</h3></div><div style='display:inline-block' align='center'><h3>Número de paginas: " + datosLibros.Libros[x].paginasLibro + "</h3></div></div></div><div align='center'><h2>Precio: " + datosLibros.Libros[x].precioventa + "</h2></div>   <div> <br><center><h2>Genero: " + datosLibros.Libros[x].generoLibro + "</h2> </center></div></div>");
		 } 
		 
		} 
	}); 
}

function consultaeditorial()
{ 
	alert("Dentro editorial");
	datos="editorial=" + $('#txteditorial').val();
    $.ajax({  
		type: "POST",
		url: "http://192.168.1.67/libreria/buscarEditorial.php",
		data: datos, 
		error: function() {  
			alert("Error, no se puede conectar al servidor");
		}, 
		success: function(respuesta) { 
			alert(respuesta);
         var datosLibros = JSON.parse(respuesta);
		 $('#contenido4').empty();
		 
		 $(':mobile-pagecontainer').pagecontainer('change', '#editorial2', { 
			transition: 'pop' 
		 });  
		 for (var x=0; x<datosLibros.Libros.length; x++) { 6
			 $('#contenido4').append("<div><div align='center'><div style='display:inline-block' align='center'><img src='http://192.168.1.67/proyecto/recursos/imagenes/libros/" + datosLibros.Libros[x].claveLibro + ".jpg' width='60%' height='auto' /></div><div style='display:inline-block' align='center'><h1>" + datosLibros.Libros[x].tituloLibro + "</h1><br><h2>" + datosLibros.Libros[x].autorLibro + "</h2><div style='display:inline-block' align='center'><h3>Editorial: " + datosLibros.Libros[x].editorialLibro + "</h3></div><div style='display:inline-block' align='center'><h3>Número de paginas: " + datosLibros.Libros[x].paginasLibro + "</h3></div></div></div><div align='center'><h2>Precio: " + datosLibros.Libros[x].precioventa + "</h2></div>   <div> <br><center><h2>Genero: " + datosLibros.Libros[x].generoLibro + "</h2> </center></div></div>");
		 } 
		 
		} 
	}); 
}
	
	$("#btnconsulta").on("tap", function(){
		alert("Preguntando...");
		consulta();
	});
	
	$("#btntitulo").on("tap", function(){
		alert("Preguntando...");
		consultatitulo();
	});
	
	$("#btnautor").on("tap", function(){
		alert("Preguntando...");
		consultaautor();
	});
	
	$("#btneditorial").on("tap", function(){
		alert("Preguntando...");
		consultaeditorial();
	});
}); 
});

