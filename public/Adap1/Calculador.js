'use strict';
class Calculador {
  operacion(num1, num2, operation) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      default:
        return NaN;
    }
  }
}

export default Calculador;