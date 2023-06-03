// CONSIGNA:
/* Crear una lista de <ol> y <li> que contengan sólo números.
 * Convertir esos números a un array y:
 * 1. Calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
 * 2. Obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
 * 3. Obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
 * 4. Obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
 */

function obtenerNumerosAleatorios() {
  return Math.floor(Math.random() * 100);
}

function asignarNumerosAleatorios() {
  const $listaItems = document.querySelectorAll('li');

  for (let i = 0; i < $listaItems.length; i += 1) {
    $listaItems[i].textContent = obtenerNumerosAleatorios();
  }
}

function obtenerListaNumeros() {
  const $listaItems = document.querySelectorAll('li');
  const listaNumeros = [];

  for (let i = 0; i < $listaItems.length; i += 1) {
    const numerosTexto = Number($listaItems[i].textContent);
    listaNumeros.push(numerosTexto);
  }
  return listaNumeros;
}

function obtenerPromedio() {
  const listaNumeros = obtenerListaNumeros();
  let promedio = 0;

  for (let i = 0; i < listaNumeros.length; i += 1) {
    promedio += listaNumeros[i] / listaNumeros.length;
  }
  return Math.floor(promedio);
}

function obtenerNumeroMasChico() {
  const listaNumeros = obtenerListaNumeros();
  let numeroMasChico = listaNumeros[0];

  for (let i = 0; i < listaNumeros.length; i += 1) {
    if (numeroMasChico > listaNumeros[i]) {
      numeroMasChico = listaNumeros[i];
    }
  }
  return numeroMasChico;
}

function obtenerNumeroMasGrande() {
  const listaNumeros = obtenerListaNumeros();
  let numeroMasGrande = listaNumeros[0];

  for (let i = 0; i < listaNumeros.length; i += 1) {
    if (numeroMasGrande < listaNumeros[i]) {
      numeroMasGrande = listaNumeros[i];
    }
  }
  return numeroMasGrande;
}

function obtenerNumeroMasFrecuente() {
  const listaNumeros = obtenerListaNumeros();
  let contadorMaximo = 0;
  let numeroMasFrecuente = 0;

  for (let i = 0; i < listaNumeros.length; i += 1) {
    let contadorActual = 0;
    for (let j = 0; j < listaNumeros.length; j += 1) {
      if (listaNumeros[i] === listaNumeros[j]) {
        contadorActual += 1;
      }

      if (contadorActual > contadorMaximo) {
        contadorMaximo = contadorActual;
        numeroMasFrecuente = listaNumeros[i];
      }
    }
  }
  return contadorMaximo > 1 ? numeroMasFrecuente : 'No hay valores repetidos';
}

function mostrarResultados() {
  const $promedio = document.querySelector('#promedio');
  const $numeroMasChico = document.querySelector('#numero-mas-chico');
  const $numeroMasGrande = document.querySelector('#numero-mas-grande');
  const $numeroMasFrecuente = document.querySelector('#numero-mas-frecuente');

  $promedio.textContent += obtenerPromedio();
  $numeroMasChico.textContent += obtenerNumeroMasChico();
  $numeroMasGrande.textContent += obtenerNumeroMasGrande();
  $numeroMasFrecuente.textContent += obtenerNumeroMasFrecuente();
}

function resaltarResultados() {
  const $listaItems = document.querySelectorAll('li');
  const numeroMasChico = obtenerNumeroMasChico();
  const numeroMasGrande = obtenerNumeroMasGrande();
  const numeroMasFrecuente = obtenerNumeroMasFrecuente();

  for (let i = 0; i < $listaItems.length; i += 1) {
    if ($listaItems[i].textContent == numeroMasChico) {
      $listaItems[i].style.color = '#20b2aa';
    }

    if ($listaItems[i].textContent == numeroMasGrande) {
      $listaItems[i].style.color = '#f08080';
    }

    if ($listaItems[i].textContent == numeroMasFrecuente) {
      $listaItems[i].style.color = '#ec5fb6';
    }
  }
}

asignarNumerosAleatorios();
mostrarResultados();
resaltarResultados();

const botonRefrescarPagina = document.querySelector('button');
botonRefrescarPagina.onclick = function () {
  location.reload();
};
