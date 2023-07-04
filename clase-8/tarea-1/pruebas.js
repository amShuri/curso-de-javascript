function probarValidarNumero() {
  console.assert(
    validarNumero(0) === 'debe ser un número mayor o igual a 1',
    'probarValidarNumero() no pudo comprobar el valor del input fuera un número mayor o igual a 1',
  );

  console.assert(
    validarNumero(12.5) === 'debe ser un número entero',
    'probarValidarNumero() no pudo comprobar el valor del input fuera un número entero',
  );

  console.assert(
    validarNumero(12) === '',
    'probarValidarNumero() no pudo comprobar que el valor del input fuera un número válido',
  );
}

probarValidarNumero();
