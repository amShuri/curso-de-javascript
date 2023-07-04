function probarValidarNumero() {
  console.assert(
    validarNumero('--') === 'debe ser un valor numérico entre 0 y 9',
    'probarValidarNumero() no pudo comprobar que el valor del input fuera valor numérico entre 0 y 9'
  );

  console.assert(
    validarNumero(-15) === 'debe ser un número positivo',
    'probarValidarNumero() no pudo comprobar que el valor del input fuera un número positivo'
  );

  console.assert(
    validarNumero(15) === '',
    'probarValidarNumero() no pudo comprobar que el valor del input fuera un número válido'
  );
}

probarValidarNumero();
