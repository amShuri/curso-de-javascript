document.querySelector('#agregar-integrante').onclick = function (e) {
  e.preventDefault();

  crearIntegrante();
  mostrarElemento('#btn-calcular');
  mostrarElemento('#resultado');
};

document.querySelector('#btn-calcular').onclick = function (e) {
  e.preventDefault();

  const $salarios = document.querySelectorAll('#contenedor-integrantes input');
  const hayErrores = validarSalarioIntegrantes($salarios);
  if (!hayErrores) {
    const salarios = obtenerSalarios($salarios);
    const menorSalario = obtenerMenorValor(salarios);
    const mayorSalario = obtenerMayorValor(salarios);
    const promedioAnual = obtenerPromedio(salarios);
    const promedioMensual = obtenerPromedioMensual(promedioAnual);
    mostrarResultado('#menor-salario', menorSalario);
    mostrarResultado('#mayor-salario', mayorSalario);
    mostrarResultado('#promedio-anual', promedioAnual);
    mostrarResultado('#promedio-mensual', promedioMensual);
  }
};

document.querySelector('#contenedor-integrantes').onclick = function (e) {
  if (e.target.id !== 'btn-eliminar') return;
  eliminarIntegrante(e);
  eliminarResultados('#resultado input');
  actualizarAtributosIntegrantes();
  const $salarios = document.querySelectorAll('#contenedor-integrantes input');
  validarSalarioIntegrantes($salarios);

  const hayIntegrantes = document.querySelector('#contenedor-integrantes > div');
  if (!hayIntegrantes) {
    ocultarElemento('#btn-calcular');
    ocultarElemento('#resultado');
  }
};

function crearIntegrante() {
  const $contenedor = document.querySelector('#contenedor-integrantes');
  const numeroDeIntegrantes = $contenedor.childElementCount + 1;

  const $integrante = document.createElement('div');
  $integrante.id = `integrante-${numeroDeIntegrantes}`;
  $integrante.classList.add('my-2');
  $contenedor.appendChild($integrante);

  const $labelSalario = document.createElement('label');
  $labelSalario.setAttribute('for', `salario-integrante-${numeroDeIntegrantes}`);
  $labelSalario.textContent = `Salario Integrante #${numeroDeIntegrantes}`;
  $labelSalario.classList.add('form-text', 'd-block');

  const $inputSalario = document.createElement('input');
  $inputSalario.type = 'number';
  $inputSalario.name = `salario-integrante-${numeroDeIntegrantes}`;
  $inputSalario.id = `salario-integrante-${numeroDeIntegrantes}`;
  $inputSalario.classList.add('form-control', 'd-inline', 'align-middle', 'w-auto', 'me-2');

  const $btnEliminar = document.createElement('button');
  $btnEliminar.textContent = 'Eliminar';
  $btnEliminar.id = 'btn-eliminar';
  $btnEliminar.classList.add('btn', 'btn-outline-danger');

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
  document.querySelector(elemento).value = resultado || 0;
}

function eliminarResultados(elemento) {
  const $resultados = document.querySelectorAll(elemento);
  for (let i = 0; i < $resultados.length; i += 1) {
    $resultados[i].value = '';
  }
}

function mostrarElemento(elemento) {
  document.querySelector(elemento).classList.remove('visually-hidden');
}

function ocultarElemento(elemento) {
  document.querySelector(elemento).classList.add('visually-hidden');
}

function eliminarIntegrante(e) {
  const $integrantes = e.target.closest('#contenedor-integrantes > div');
  $integrantes.remove();
}

function actualizarAtributosIntegrantes() {
  const $integrantes = document.querySelectorAll('#contenedor-integrantes > div');
  for (let i = 0; i < $integrantes.length; i += 1) {
    $integrantes[i].id = `integrante-${i + 1}`;

    const $labelSalario = $integrantes[i].querySelector('label');
    $labelSalario.setAttribute('for', `salario-integrante-${i + 1}`);
    $labelSalario.textContent = `Salario Integrante #${i + 1}`;

    const $inputSalario = $integrantes[i].querySelector('input');
    $inputSalario.setAttribute('id', `salario-integrante-${i + 1}`);
    $inputSalario.setAttribute('name', `salario-integrante-${i + 1}`);
  }
}

// Funciones que manejan las validaciones
function manejarErrores(errores) {
  const $form = document.querySelector('form');
  const $contenedorErrores = document.querySelector('#errores');
  const keys = Object.keys(errores);
  let cantidadErrores = 0;

  // Vaciamos el contenedor antes de que se creen nuevos errores
  $contenedorErrores.textContent = '';

  keys.forEach((key) => {
    const error = errores[key];
    const $errorLabel = $form.querySelector(`label[for="${key}"]`).textContent;

    if (error) {
      $form[key].classList.add('error');
      const $error = document.createElement('li');
      $error.textContent = `${$errorLabel} ${error}`;
      $contenedorErrores.appendChild($error);
      cantidadErrores += 1;
    } else {
      $form[key].classList.remove('error');
    }
  });
  return cantidadErrores;
}

function validarNumero(numero) {
  if (Number.isNaN(Number(numero))) {
    return 'debe ser un valor numérico entre 0 y 9';
  }

  if (numero < 0) {
    return 'debe ser un número positivo';
  }

  return '';
}

function validarSalarioIntegrantes(inputSalario) {
  const errores = {};
  inputSalario.forEach((input) => {
    errores[input.name] = validarNumero(input.value);
  });

  const cantidadErrores = manejarErrores(errores);
  return cantidadErrores;
}
