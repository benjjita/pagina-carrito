const alumnos = []

function ingresar() {
	let nombre = document.getElementById('nombre').value;
	let apellido = document.getElementById('apellido').value;
	let edad = document.getElementById('edad').value;
	alert("Usuario: " + nombre + apellido + edad)
}