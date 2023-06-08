// CONSIGNA:
/* Crear una lista de <ol> y <li> que contengan sólo números.
 * Convertir esos números a un array y:
 * 1. Calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
 * 2. Obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
 * 3. Obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
 * 4. Obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
 */

function obtenerArrayNumerosAleatorios(cantidadNumeros) {
  const numeros = [];

  for (let i = 0; i < cantidadNumeros; i += 1) {
    const numeroAleatorio = Math.floor(Math.random() * 100);
    numeros.push(numeroAleatorio);
  }
  return numeros;
}

function rellenarListaItems(arrayNumeros) {
  const $listaItems = document.querySelectorAll('li');

  for (let i = 0; i < $listaItems.length; i += 1) {
    $listaItems[i].textContent = arrayNumeros[i];
  }
}

function calcularPromedio(arrayNumeros) {
  let promedio = 0;

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    promedio += arrayNumeros[i] / arrayNumeros.length;
  }
  return Math.floor(promedio);
}

function obtenerNumeroMasChico(arrayNumeros) {
  let numeroMasChico = arrayNumeros[0];

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (numeroMasChico > arrayNumeros[i]) {
      numeroMasChico = arrayNumeros[i];
    }
  }
  return numeroMasChico;
}

function obtenerNumeroMasGrande(arrayNumeros) {
  let numeroMasGrande = arrayNumeros[0];

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (numeroMasGrande < arrayNumeros[i]) {
      numeroMasGrande = arrayNumeros[i];
    }
  }
  return numeroMasGrande;
}

function obtenerNumeroMasFrecuente(arrayNumeros) {
  let contadorMaximo = 0;
  let numeroMasFrecuente = 0;

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    let contadorActual = 0;
    for (let j = 0; j < arrayNumeros.length; j += 1) {
      if (arrayNumeros[i] === arrayNumeros[j]) {
        contadorActual += 1;
      }

      if (contadorActual > contadorMaximo) {
        contadorMaximo = contadorActual;
        numeroMasFrecuente = arrayNumeros[i];
      }
    }
  }
  return contadorMaximo > 1 ? numeroMasFrecuente : 'No hay valores repetidos';
}

function mostrarResultados(promedio, numeroMasChico, numeroMasGrande, numeroMasFrecuente) {
  document.querySelector('#promedio').textContent += promedio;
  document.querySelector('#numero-mas-chico').textContent += numeroMasChico;
  document.querySelector('#numero-mas-grande').textContent += numeroMasGrande;
  document.querySelector('#numero-mas-frecuente').textContent += numeroMasFrecuente;
}

function resaltarResultados(numeroMasChico, numeroMasGrande, numeroMasFrecuente) {
  const $listaItems = document.querySelectorAll('li');

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

const $cantidadListaItems = document.querySelectorAll('li').length;
const arrayNumeros = obtenerArrayNumerosAleatorios($cantidadListaItems);
rellenarListaItems(arrayNumeros);

const promedio = calcularPromedio(arrayNumeros);
const numeroMasChico = obtenerNumeroMasChico(arrayNumeros);
const numeroMasGrande = obtenerNumeroMasGrande(arrayNumeros);
const numeroMasFrecuente = obtenerNumeroMasFrecuente(arrayNumeros);
mostrarResultados(promedio, numeroMasChico, numeroMasGrande, numeroMasFrecuente);
resaltarResultados(numeroMasChico, numeroMasGrande, numeroMasFrecuente);

document.querySelector('#actualizar-pagina').onclick = function () {
  location.reload();
};
