// CONSIGNA:
/* Creá un formulario que capture el primer nombre, segundo nombre,
 * apellido/s y edad del usuario. También vamos a crear un <h1> que
 * diga Bienvenido! y un botón de acción que una vez que lo apretás,
 * va a mostrar toda la información junta en un campo de texto,
 * y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
 */

function obtenerDatosUsuario() {
  const $nombre = document.querySelector('#nombre-usuario');
  const $apellido = document.querySelector('#apellido-usuario');
  const $edad = document.querySelector('#edad-usuario');
  return [$nombre.value, $apellido.value, $edad.value];
}

function crearCamposInformacion() {
  const $resultado = document.querySelector('.resultado');
  if ($resultado.childNodes.length > 0) return;

  const $campoNombre = document.createElement('p');
  const $campoApellido = document.createElement('p');
  const $campoEdad = document.createElement('p');
  $resultado.append($campoNombre, $campoApellido, $campoEdad);
}

function mostrarDatosUsuario(datos) {
  const $camposDeTexto = document.querySelectorAll('.resultado p');
  const $etiquetas = document.querySelectorAll('label');
  for (let i = 0; i < $camposDeTexto.length; i += 1) {
    $camposDeTexto[i].textContent = `${$etiquetas[i].textContent} ${datos[i]}`;
  }
}

function actualizarTextoSaludo(nombre) {
  const $mensajeSaludo = document.querySelector('h1');
  const mensajeSaludoOriginal = 'Hola!';
  if (!nombre) {
    $mensajeSaludo.textContent = mensajeSaludoOriginal;
  } else {
    $mensajeSaludo.textContent = `Hola, ${nombre}!`;
  }
}

function reiniciarFormulario() {
  const $formulario = document.querySelector('form');
  const $primerCampo = document.querySelector('form input');
  $formulario.reset();
  $primerCampo.focus();
}

const botonEnviarDatos = document.querySelector('.enviar-datos');
botonEnviarDatos.onclick = function (e) {
  e.preventDefault();

  const datosUsuario = obtenerDatosUsuario();
  crearCamposInformacion();
  mostrarDatosUsuario(datosUsuario);
  actualizarTextoSaludo(datosUsuario[0]);
  reiniciarFormulario();
};
