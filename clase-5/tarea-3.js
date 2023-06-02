// CONSIGNA:
/* Por cada clase de r/argentina programa existente, vamos a pedir:
 * horas, minutos y segundos de cada video. Ej: si un video dura
 * 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto
 * con cada dato. Tambien vamos a crear un botón "Calcular tiempo total",
 * el cual debe mostrar en un <strong> pre-creado el tiempo total de los videos.
 */

function obtenerHoras() {
  const $horas = document.querySelector('#horas');
  return Number($horas.value);
}

function obtenerMinutos() {
  const $minutos = document.querySelector('#minutos');
  return Number($minutos.value);
}

function obtenerSegundos() {
  const $segundos = document.querySelector('#segundos');
  return Number($segundos.value);
}

function mostrarTiempoTotal(horas, minutos, segundos) {
  let horasFormateadas = horas < 10 ? '0' + horas : horas;
  let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
  let segundosFormateados = segundos < 10 ? '0' + segundos : segundos;

  const $resultado = document.querySelector('#tiempo-total');
  $resultado.textContent = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
}

function reiniciarFormulario() {
  const $formulario = document.querySelector('form');
  const $primerCampo = document.querySelector('form input');
  $formulario.reset();
  $primerCampo.focus();
}

function calcularTiempoTotal() {
  let totalHoras = 0;
  let totalMinutos = 0;
  let totalSegundos = 0;

  function agregarTiempo() {
    totalHoras += obtenerHoras();
    totalMinutos += obtenerMinutos();
    totalSegundos += obtenerSegundos();

    while (totalMinutos >= 60) {
      totalMinutos -= 60;
      totalHoras += 1;
    }
    while (totalSegundos >= 60) {
      totalSegundos -= 60;
      totalMinutos += 1;
    }
  }
  const $botonAgregarTiempo = document.querySelector('#agregar-tiempo');
  $botonAgregarTiempo.onclick = function (e) {
    e.preventDefault();

    agregarTiempo();
    mostrarTiempoTotal(totalHoras, totalMinutos, totalSegundos);
    reiniciarFormulario();
  };
}

/* Invocamos calcularTiempoTotal() una vez para asegurar el acceso correcto
 * de la funcion interna agregarTiempo() a las variables y su modificacion
 * cuando se utiliza $agregarBotonTiempo.
 */
calcularTiempoTotal();
