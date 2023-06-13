// CONSIGNA:
/* Empezar preguntando cuánta gente hay en`Edad del familiar: ';
 * Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
 * Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
 * la menor edad y el promedio del grupo familiar.
 * Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 * borrando los inputs ya creados (investigar cómo en MDN).
 */

function obtenerCantidadIntegrantes() {
  return Number(document.querySelector('#cantidad-integrantes').value);
}

function crearIntegrantes(cantidadIntegrantes) {
  const $contenedor = document.querySelector('#contenedor-integrantes');
  const $integrante = document.createElement('div');
  $integrante.className = 'integrante';
  $contenedor.appendChild($integrante);

  for (let i = 0; i < cantidadIntegrantes; i += 1) {
    const $labelEdad = document.createElement('label');
    $labelEdad.setAttribute('for', `edad-integrante-${i + 1}`);
    $labelEdad.textContent = `Edad del integrante #${i + 1}`;

    const $inputEdad = document.createElement('input');
    $inputEdad.setAttribute('type', 'number');
    $inputEdad.setAttribute('id', `edad-integrante-${i + 1}`);

    $integrante.append($labelEdad, $inputEdad);
  }
}

function obtenerEdadIntegrante(inputEdades) {
  const edadIntegrantes = [];
  inputEdades.forEach((input) => {
    const edad = Number(input.value);
    if (edad >= 1) {
      edadIntegrantes.push(edad);
    }
  });
  return edadIntegrantes;
}

function mostrarResultado(elemento, resultado) {
  if (elemento && resultado) {
    document.querySelector(elemento).textContent = resultado;
  }
}

function borrarResultados(elemento) {
  const $resultados = document.querySelectorAll(elemento);
  for (let i = 0; i < $resultados.length; i += 1) {
    $resultados[i].textContent = '';
  }
}

function eliminarIntegrantes() {
  document.querySelectorAll('.integrante').forEach((integrante) => {
    integrante.remove();
  });
}

function actualizarInterfazFormulario() {
  document.querySelectorAll('form > div').forEach((elemento) => {
    elemento.classList.toggle('oculto');
  });
}

function restablecerInputsFormulario() {
  document.querySelector('form').reset();
}

function enfocarInputVacio() {
  const $inputs = document.querySelectorAll('input');
  for (let i = 0; i < $inputs.length; i += 1) {
    if ($inputs[i].value === '') {
      $inputs[i].focus();
      break;
    }
  }
}

document.querySelector('#agregar-integrantes').onclick = function (e) {
  e.preventDefault();

  const integrantes = obtenerCantidadIntegrantes();
  if (integrantes) {
    crearIntegrantes(integrantes);
    actualizarInterfazFormulario();
  }
  enfocarInputVacio();
};

document.querySelector('#calcular-resultados').onclick = function (e) {
  e.preventDefault();

  const $inputsEdades = document.querySelectorAll('.integrante > input');
  const edades = obtenerEdadIntegrante($inputsEdades);
  mostrarResultado('#edad-promedio', obtenerPromedio(edades));
  mostrarResultado('#edad-menor', obtenerMenorValor(edades));
  mostrarResultado('#edad-mayor', obtenerMayorValor(edades));
  enfocarInputVacio();
};

document.querySelector('#reiniciar').onclick = function (e) {
  e.preventDefault();

  eliminarIntegrantes();
  borrarResultados('#resultado em');
  restablecerInputsFormulario();
  actualizarInterfazFormulario();
  enfocarInputVacio();
};

// Hacemos focus en el primer input de la página.
document.querySelector('#cantidad-integrantes').focus();
