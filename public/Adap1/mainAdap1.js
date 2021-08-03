import Calculador from "./Calculador.js";

const calculadora = new Calculador();

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('calculador')

    button.addEventListener('mousedown', () => {
        var operatcionHTML = document.getElementById('opereacion').value;
        var nume01 = document.getElementById('numero01').value;
        var intnum01 = parseInt(nume01);
        var nume02 = document.getElementById('numero02').value;
        var intnum02 = parseInt(nume02);
        const sumAdaptador = calculadora.operacion(intnum01, intnum02, operatcionHTML);
        document.f.ft.value = sumAdaptador;
    })

})