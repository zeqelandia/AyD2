var ultimoEvento = 2;

function crearEvento(){
	if(ultimoEvento<=5){
		ultimoEvento++;
		document.getElementById("evento"+ultimoEvento).style.visibility = "visible";
	}
}

function crear(num){
	var fecha= document.getElementById("txtFecha"+num).value;
	var horaInicio= document.getElementById("txtHoraInicio"+num).value;
	var horaFin= document.getElementById("txtHoraFin"+num).value;
	var cantJugadores= document.getElementById("txtCantJugadores"+num).value;
	var lugar= document.getElementById("txtLugar"+num).value;

	if(!Date.parse(fecha)){
		errorDatos();
	}else if(horaInicio == ""){
		errorDatos();
	}else if(horaFin == ""){
		errorDatos();
	}else if(parseInt(cantJugadores) <= 0){
		errorDatos();
	}else if (lugar == "") {
		errorDatos();
	}else{
		document.getElementById("evento"+num).style.visibility = "hidden";
		var evento = document.getElementById("evento_creado"+num);
		
		document.getElementById("lblFecha"+num).innerHTML= document.getElementById("txtFecha"+num).value;
		document.getElementById("lblHoraInicio"+num).innerHTML= document.getElementById("txtHoraInicio"+num).value;
		document.getElementById("lblHoraFin"+num).innerHTML= document.getElementById("txtHoraFin"+num).value;
		document.getElementById("lblCantJugadores"+num).innerHTML= document.getElementById("txtCantJugadores"+num).value;
		evento.style.visibility = "visible";

		alert("El evento se creo exitosamente");
	}
}

function cancelar(num){
	document.getElementById("evento"+num).style.visibility = "hidden";
	ultimoEvento--;
}

function errorDatos(){
	alert("Se ingresaron datos incorrectos, ingrese los datos nuevamente");
}

function borrar(num){
	if(confirm("Desea borrar el evento seleccionado?")){
		document.getElementById("evento_creado"+num).style.position= "absolute";
		document.getElementById("evento_creado"+num).style.visibility= "hidden";
	}
	
}

function anotarse(num){
	var cant = document.getElementById("lblCantJugadores"+num);
	var valor = parseInt(cant.innerHTML);
	
	cant.innerHTML= valor - 1;
	document.getElementById("btnAnotarse"+num).disabled= true;
	document.getElementById("btnAnotarse"+num).style.background= "black";
	alert("Te anotaste con exito al partido, espero que juegues mejor que Biglia :v");
}