'use strict';
import NuevaCalculadora from "./NuevaCalculadora.js";


class CalculadoraAdapter {
  constructor() {
    this.calculadora = new NuevaCalculadora();
  }
  operation(num1, num2, operation) {
    switch (operation) {
      case "add":
        return this.calculadora.add(num1, num2);
      case "sub":
        return this.calculadora.sub(num1, num2);
      case "multi":
        return this.calculadora.multi(num1, num2);
      case "div":
        return this.calculadora.div(num1, num2);
      default:
        return NaN;
    }
  }
}

export default CalculadoraAdapter;