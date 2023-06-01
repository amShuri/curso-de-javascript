// CONSIGNA:
/* Crear un formulario donde un usuario pueda ingresar su salario anual.
 * Cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
 * en una caja de texto deshabilitada.
 */

function obtenerSalarioAnual() {
  const $salarioAnual = document.querySelector('.salario-anual');
  return $salarioAnual.value;
}

function mostrarSalarioMensual(salarioMensual) {
  const $salarioMensual = document.querySelector('.salario-mensual');
  $salarioMensual.value = salarioMensual;
}

function calcularSalarioMensual() {
  const salarioMensual = obtenerSalarioAnual() / 12;
  return salarioMensual;
}

const $botonCalcularSalario = document.querySelector('.calcular-salario');
$botonCalcularSalario.onclick = function () {
  const salarioMensual = calcularSalarioMensual();
  mostrarSalarioMensual(salarioMensual);
};
