import NuevaCalculadora from "./NuevaCalculadora.js";
import CalculadoraAdapter from "./CalculadoraAdapter.js";
//Adapter
const calcAdaptador = new CalculadoraAdapter();

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculador1')

    button.addEventListener('mousedown', () => {
        var operatcionHTML = document.getElementById('opereacion1').value;
        var nume1 = document.getElementById('numero1').value;
        var intnum1 = parseInt(nume1);
        var nume2 = document.getElementById('numero2').value;
        var intnum2 = parseInt(nume2);
        const sumAdaptador = calcAdaptador.operation(intnum1, intnum2, operatcionHTML);
        document.f1.f1t1.value = sumAdaptador;
    })

})
//New Calculator
const calculadora = new NuevaCalculadora();

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculador2')

    button.addEventListener('mousedown', () => {
        var operatcionHTML = document.getElementById('opereacion2').value;
        var nume3 = document.getElementById('numero3').value;
        var intnum3 = parseInt(nume3);
        var nume4 = document.getElementById('numero4').value;
        var intnum4 = parseInt(nume4);
        if (operatcionHTML == 'add') {
            const sum = calculadora.add(intnum3, intnum4);
            document.f2.f2t2.value = sum;

        } else if (operatcionHTML == 'sub') {
            const sub = calculadora.sub(intnum3, intnum4);
            document.f2.f2t2.value = sub;


        } else if (operatcionHTML == 'multi') {
            const multi = calculadora.multi(intnum3, intnum4);
            document.f2.f2t2.value = multi;


        }else if (operatcionHTML == 'div') {
            const div = calculadora.div(intnum3, intnum4);
            document.f2.f2t2.value = div;


        }

    })

})


