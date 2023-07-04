// Funciones para tarea 1 y 2
function obtenerPromedio(valores) {
  let sumaValores = 0;
  for (let i = 0; i < valores.length; i += 1) {
    sumaValores += valores[i];
  }

  const promedio = sumaValores / valores.length;
  return Number(promedio.toFixed(2));
}

function obtenerMenorValor(valores) {
  let menorValor = valores[0];
  for (let i = 0; i < valores.length; i += 1) {
    if (menorValor > valores[i]) {
      menorValor = valores[i];
    }
  }
  return menorValor;
}

function obtenerMayorValor(valores) {
  let mayorValor = valores[0];
  for (let i = 0; i < valores.length; i += 1) {
    if (mayorValor < valores[i]) {
      mayorValor = valores[i];
    }
  }
  return mayorValor;
}

// Cálculo para tarea 2.
function obtenerPromedioMensual(promedioAnual) {
  const MESES_EN_UN_ANIO = 12;
  const promedioMensual = promedioAnual / MESES_EN_UN_ANIO;
  return Number(promedioMensual.toFixed(2));
}
