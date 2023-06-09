// CONSIGNA:
/* Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
 * para completar el salario anual de cada integrante de la familia que trabaje.
 * Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
 * menor salario anual, salario anual promedio y salario mensual promedio.
 * Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
 */

function crearIntegrante() {
  const $contenedor = document.querySelector('#contenedor-integrantes');
  const numeroDeIntegrantes = $contenedor.childElementCount + 1;

  const $integrante = document.createElement('div');
  $integrante.className = 'integrante';
  $contenedor.appendChild($integrante);

  const $labelSalario = document.createElement('label');
  $labelSalario.setAttribute('for', `salario-integrante-${numeroDeIntegrantes}`);
  $labelSalario.textContent = `Salario del integrante #${numeroDeIntegrantes}`;

  const $inputSalario = document.createElement('input');
  $inputSalario.setAttribute('type', 'number');
  $inputSalario.setAttribute('id', `salario-integrante-${numeroDeIntegrantes}`);

  const $btnEliminar = document.createElement('button');
  $btnEliminar.textContent = 'Eliminar';
  $btnEliminar.className = 'btn-eliminar';

  $integrante.append($labelSalario, $inputSalario, $btnEliminar);
}

function obtenerSalarios(inputSalarios) {
  const salarioIntegrantes = [];
  inputSalarios.forEach((input) => {
    const salario = Number(input.value);
    if (salario >= 1) {
      salarioIntegrantes.push(salario);
    }
  });
  return salarioIntegrantes;
}

function mostrarResultado(elemento, resultado) {
  document.querySelector(elemento).textContent = resultado || '';
}

function borrarResultados(elemento) {
  const $resultados = document.querySelectorAll(elemento);
  for (let i = 0; i < $resultados.length; i += 1) {
    $resultados[i].textContent = '';
  }
}

function mostrarElemento(elemento) {
  document.querySelector(elemento).classList.remove('oculto');
}

function ocultarElemento(elemento) {
  document.querySelector(elemento).classList.add('oculto');
}

function eliminarIntegrante(e) {
  const $integrante = e.target.parentNode;
  $integrante.remove();
}

function actualizarAtributosIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i += 1) {
    const $labelSalario = $integrantes[i].querySelector('label');
    $labelSalario.setAttribute('for', `salario-integrante-${i + 1}`);
    $labelSalario.textContent = `Salario del integrante #${i + 1}`;

    const $inputSalario = $integrantes[i].querySelector('input');
    $inputSalario.setAttribute('id', `salario-integrante-${i + 1}`);
  }
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

document.querySelector('#agregar-integrante').onclick = function (e) {
  e.preventDefault();

  crearIntegrante();
  mostrarElemento('#btn-calcular');
  mostrarElemento('#resultado');
  enfocarInputVacio();
};

document.querySelector('#btn-calcular').onclick = function (e) {
  e.preventDefault();

  const $inputSalarios = document.querySelectorAll('.integrante > input');
  const salarios = obtenerSalarios($inputSalarios);
  const menorSalario = obtenerMenorValor(salarios);
  const mayorSalario = obtenerMayorValor(salarios);
  const promedioAnual = obtenerPromedio(salarios);
  const promedioMensual = obtenerPromedioMensual(promedioAnual);
  mostrarResultado('#menor-salario', menorSalario);
  mostrarResultado('#mayor-salario', mayorSalario);
  mostrarResultado('#promedio-anual', promedioAnual);
  mostrarResultado('#promedio-mensual', promedioMensual);
  enfocarInputVacio();
};

document.querySelector('#contenedor-integrantes').onclick = function (e) {
  if (e.target.className !== 'btn-eliminar') return;
  eliminarIntegrante(e);
  actualizarAtributosIntegrantes();

  const hayIntegrantes = document.querySelector('.integrante');
  if (!hayIntegrantes) {
    ocultarElemento('#btn-calcular');
    ocultarElemento('#resultado');
    borrarResultados('#resultado em');
  }
};
