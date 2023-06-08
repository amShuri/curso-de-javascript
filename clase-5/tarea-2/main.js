// CONSIGNA:
/* Creá un formulario que capture el primer nombre, segundo nombre,
 * apellido/s y edad del usuario. También vamos a crear un <h1> que
 * diga Bienvenido! y un botón de acción que una vez que lo apretás,
 * va a mostrar toda la información junta en un campo de texto,
 * y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
 */

function mostrarInformacionUsuario(nombre, apellido, edad) {
  document.querySelector('#nombre-usuario').textContent = `Nombre: ${nombre}`;
  document.querySelector('#apellido-usuario').textContent = `Apellido: ${apellido}`;
  document.querySelector('#edad-usuario').textContent = `Edad: ${edad}`;
}

function mostrarSaludoPersonalizado(nombre) {
  const $mensajeSaludo = document.querySelector('h1');
  const mensajeOriginal = 'Hola!';

  if (nombre) {
    $mensajeSaludo.textContent = `Hola, ${nombre}!`;
  } else {
    $mensajeSaludo.textContent = mensajeOriginal;
  }
}

function reiniciarFormulario() {
  document.querySelector('form').reset();
}

function enfocarPrimerInput() {
  document.querySelector('input').focus();
}

document.querySelector('#mostrar-informacion-usuario').onclick = function (e) {
  e.preventDefault();

  const nombre = document.querySelector('#input-nombre').value;
  const apellido = document.querySelector('#input-apellido').value;
  const edad = document.querySelector('#input-edad').value;
  mostrarInformacionUsuario(nombre, apellido, edad);
  mostrarSaludoPersonalizado(nombre);
  reiniciarFormulario();
  enfocarPrimerInput();
};

// El focus estará en el primer input al entrar a la página.
enfocarPrimerInput();
