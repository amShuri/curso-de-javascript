// CONSIGNA:
/* Por cada clase de r/argentina programa existente, vamos a pedir:
 * horas, minutos y segundos de cada video. Ej: si un video dura
 * 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto
 * con cada dato. Tambien vamos a crear un botón "Calcular tiempo total",
 * el cual debe mostrar en un <strong> pre-creado el tiempo total de los videos.
 */

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

function calcularTiempoTotal(horas, minutos, segundos) {
  totalHoras += horas;
  totalMinutos += minutos;
  totalSegundos += segundos;

  if (totalSegundos >= 60) {
    totalMinutos += Math.floor(totalSegundos / 60);
    totalSegundos %= 60;
  }

  if (totalMinutos >= 60) {
    totalHoras += Math.floor(totalMinutos / 60);
    totalMinutos %= 60;
  }
}

function mostrarTiempoTotal(horas, minutos, segundos) {
  const horasConCerosIzq = horas.toString().padStart(2, '0');
  const minutosConCerosIzq = minutos.toString().padStart(2, '0');
  const segundosConCerosIzq = segundos.toString().padStart(2, '0');

  const $tiempoTotal = document.querySelector('#tiempo-total');
  $tiempoTotal.textContent = `${horasConCerosIzq}:${minutosConCerosIzq}:${segundosConCerosIzq}`;
}

function reiniciarFormulario() {
  document.querySelector('form').reset();
}
function enfocarPrimerInput() {
  document.querySelector('input').focus();
}

document.querySelector('#boton-agregar-tiempo').onclick = function (e) {
  e.preventDefault();
  const horasIngresadas = Number(document.querySelector('#input-horas').value);
  const minutosIngresados = Number(document.querySelector('#input-minutos').value);
  const segundosIngresados = Number(document.querySelector('#input-segundos').value);

  calcularTiempoTotal(horasIngresadas, minutosIngresados, segundosIngresados);
  mostrarTiempoTotal(totalHoras, totalMinutos, totalSegundos);
  reiniciarFormulario();
  enfocarPrimerInput();
};

// El focus estará en el primer input al entrar a la página.
enfocarPrimerInput();
