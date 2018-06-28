function volverMain(){
	document.getElementById("contenedor-main").classList.remove("fadeOutLeft");
	document.getElementById("contenedor-crearCuenta").classList.remove("fadeIn");

	document.getElementById("contenedor-crearCuenta").classList.add("fadeOutLeft");
	
	setTimeout(function(){
		document.getElementById("contenedor-crearCuenta").style.visibility= "hidden";
		document.getElementById("crearCuenta").style.visibility= "hidden";
	}, 1000);
	
	setTimeout(function(){
		document.getElementById("contenedor-main").style.visibility= "visible";
	
		document.getElementById("contenedor-main").classList.add("fadeIn");
	}, 300);
	//document.getElementById("contenedor-crearCuenta").classList.remove("fadeOutLeft");
}

function crearUsuario(){
	document.getElementById("contenedor-crearCuenta").classList.remove("fadeOutLeft");
	document.getElementById("contenedor-main").classList.remove("fadeIn");

	document.getElementById("contenedor-main").classList.add("fadeOutLeft");

	setTimeout(function(){
		document.getElementById("contenedor-main").style.visibility= "hidden";
	}, 1000);
	
	setTimeout(function(){
		document.getElementById("contenedor-crearCuenta").style.visibility= "visible";
		document.getElementById("crearCuenta").style.visibility= "visible";

		document.getElementById("contenedor-crearCuenta").classList.add("fadeIn");
	}, 300);


	/*document.getElementById("crearCuenta").style.visibility= "visible";
	document.getElementById("contenedor-crearCuenta").style.visibility= "visible";
	document.getElementById("contenedor-main").style.visibility= "hidden";*/
}

function volverCuenta(){
	document.getElementById("crearCuenta").classList.remove("fadeOut");
	document.getElementById("crearCuenta-jugador").classList.remove("fadeIn");
	document.getElementById("crearCuenta-recinto").classList.remove("fadeIn");

	document.getElementById("crearCuenta-jugador").classList.add("fadeOut");
	document.getElementById("crearCuenta-recinto").classList.add("fadeOut");

	setTimeout(function(){
		document.getElementById("crearCuenta-jugador").style.visibility= "hidden";
		document.getElementById("crearCuenta-recinto").style.visibility= "hidden";
	},800);

	setTimeout(function(){
		document.getElementById("crearCuenta").style.visibility= "visible";
		document.getElementById("crearCuenta").classList.add("fadeIn");
	},300);

	/*document.getElementById("crearCuenta").style.visibility= "visible";
	document.getElementById("crearCuenta-jugador").style.visibility= "hidden";
	document.getElementById("crearCuenta-recinto").style.visibility= "hidden";*/
}

function crearJugador(){
	document.getElementById("crearCuenta-jugador").classList.remove("fadeOut");
	document.getElementById("crearCuenta").classList.remove("fadeIn");
	document.getElementById("crearCuenta").classList.add("fadeOut");

	setTimeout(function(){
		document.getElementById("crearCuenta").style.visibility= "hidden";
	}, 800);

	setTimeout(function(){
		document.getElementById("crearCuenta-jugador").style.visibility= "visible";
		document.getElementById("crearCuenta-jugador").classList.add("fadeIn");
	}, 300);

	document.getElementById("nickname").value= "";
	document.getElementById("password").value= "";
	document.getElementById("nombre").value= "";
	document.getElementById("mail").value= "";
	document.getElementById("fecha").value= "";
	document.getElementById("posicion").value= "";
}

function crearRecinto(){
	document.getElementById("crearCuenta-recinto").classList.remove("fadeOut");
	document.getElementById("crearCuenta").classList.remove("fadeIn");
	document.getElementById("crearCuenta").classList.add("fadeOut");

	setTimeout(function(){
		document.getElementById("crearCuenta").style.visibility= "hidden";
	}, 800);

	setTimeout(function(){
		document.getElementById("crearCuenta-recinto").style.visibility= "visible";
		document.getElementById("crearCuenta-recinto").classList.add("fadeIn");
	}, 300);

	document.getElementById("nicknameRecinto").value= "";
	document.getElementById("passwordRecinto").value= "";
	document.getElementById("nombreRecinto").value= "";
	document.getElementById("mailRecinto").value= "";
	document.getElementById("direccion").value= "";
	document.getElementById("maps").value= "";
}

function mostrarAyuda() {
	document.getElementById("contenedor-ayuda").style.visibility= "visible";
	document.getElementById("ayuda").classList.add("texto-verde");

	document.getElementById("contenedor-ayuda").classList.remove("fadeOut");
	document.getElementById("contenedor-ayuda").classList.add("fadeIn");
}

function ocultarAyuda() {
	document.getElementById("contenedor-ayuda").classList.remove("fadeIn");
	document.getElementById("contenedor-ayuda").classList.add("fadeOut");

	setTimeout(function(){
		document.getElementById("contenedor-ayuda").style.visibility= "hidden";
	},900);
	document.getElementById("ayuda").classList.remove("texto-verde");
}

function login(){
	//var usuario = document.getElementById("txt-login").value;
		if(document.getElementById("userName").value == "zeqe"){
			window.open("admin.html", "_self");
		}else{
			window.open("user.html");
		}
	
}