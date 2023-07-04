document.querySelector('#agregar-integrantes').onclick = function (e) {
  e.preventDefault();
  const cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
  const hayErrores = validarCantidadIntegrantes(cantidadIntegrantes);

  if (!hayErrores) {
    crearIntegrantes(cantidadIntegrantes);
    actualizarInterfazFormulario();
  }
};

document.querySelector('#calcular-resultados').onclick = function (e) {
  e.preventDefault();
  const $inputsEdades = document.querySelectorAll('.input-edad');
  const hayErrores = validarEdadIntegrantes($inputsEdades);

  if (!hayErrores) {
    const edades = obtenerEdadIntegrante($inputsEdades);
    mostrarResultado('#edad-promedio', obtenerPromedio(edades));
    mostrarResultado('#edad-menor', obtenerMenorValor(edades));
    mostrarResultado('#edad-mayor', obtenerMayorValor(edades));
  }
};

document.querySelector('#reiniciar').onclick = function (e) {
  e.preventDefault();
  eliminarIntegrantes();
  eliminarResultados('#resultado em');
  restablecerInputsFormulario();
  actualizarInterfazFormulario();
};

function crearIntegrantes(cantidadIntegrantes) {
  const $contenedor = document.querySelector('#contenedor-integrantes');
  const $integrante = document.createElement('div');
  $integrante.className = 'integrante';
  $contenedor.appendChild($integrante);

  for (let i = 0; i < cantidadIntegrantes; i += 1) {
    const $labelEdad = document.createElement('label');
    $labelEdad.setAttribute('for', `edad-integrante-${i + 1}`);
    $labelEdad.textContent = `Edad Integrante #${i + 1}`;

    const $inputEdad = document.createElement('input');
    $inputEdad.type = 'number';
    $inputEdad.name = `edad-integrante-${i + 1}`;
    $inputEdad.id = `edad-integrante-${i + 1}`;
    $inputEdad.classList.add('input-edad');

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
  document.querySelector(elemento).textContent = resultado || '';
}

function eliminarResultados(elemento) {
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

// Funciones que se encargan de las validaciones
function manejarErrores(errores) {
  const $form = document.querySelector('form');
  const $contenedorErrores = document.querySelector('#errores');
  const keys = Object.keys(errores);
  let cantidadErrores = 0;

  keys.forEach((key) => {
    const error = errores[key];
    const $errores = $contenedorErrores.querySelector(`li.${key}`);
    const $errorLabel = $form.querySelector(`label[for="${key}"]`).textContent;

    if (error && !$errores) {
      $form[key].classList.add('error');
      const $error = document.createElement('li');
      $error.textContent = `${$errorLabel} ${error}`;
      $error.className = key;
      $contenedorErrores.appendChild($error);
    } else if (!error && $errores) {
      $errores.remove();
      $form[key].classList.remove('error');
    }

    if (error) {
      cantidadErrores += 1;
    }
    // Si el error existente cambia a un error diferente, actualizamos el texto
    if ($errores && $errores.textContent !== error) {
      $errores.textContent = `${$errorLabel} ${error}`;
    }
  });
  return cantidadErrores;
}

function validarNumero(numero) {
  if (numero < 1) {
    return 'debe ser un número mayor o igual a 1';
  }

  const contienePuntoDecimal = /[.]+/.test(numero);
  if (contienePuntoDecimal) {
    return 'debe ser un número entero';
  }

  return '';
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
  const errores = {
    'cantidad-integrantes': validarNumero(cantidadIntegrantes),
  };

  const cantidadErrores = manejarErrores(errores);
  return cantidadErrores;
}

function validarEdadIntegrantes(inputEdad) {
  const errores = {};
  inputEdad.forEach((input) => {
    errores[input.name] = validarNumero(input.value);
  });

  const cantidadErrores = manejarErrores(errores);
  return cantidadErrores;
}

// Hacemos focus en el primer input de la página.
document.querySelector('#cantidad-integrantes').focus();
