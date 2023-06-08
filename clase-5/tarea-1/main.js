// CONSIGNA:
/* Crear un formulario donde un usuario pueda ingresar su salario anual.
 * Cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
 * en una caja de texto deshabilitada.
 */

function obtenerSalarioAnual() {
  const $salarioAnual = document.querySelector('#salario-anual');
  return $salarioAnual.value;
}

function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_UN_ANIO = 12;
  const salarioMensual = salarioAnual / MESES_EN_UN_ANIO;
  return salarioMensual;
}

function mostrarSalarioMensual(salarioMensual) {
  document.querySelector('#salario-mensual').value = salarioMensual;
}

document.querySelector('#mostrar-salario-mensual').onclick = function (e) {
  e.preventDefault();

  const salarioAnual = obtenerSalarioAnual();
  const salarioMensual = calcularSalarioMensual(salarioAnual);
  mostrarSalarioMensual(salarioMensual);
};
