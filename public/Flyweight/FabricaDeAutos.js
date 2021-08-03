import Auto from "./Auto.js";

// Fábrica de objetos ligeros
function FabricaDeAutos() {
    var listaAutos = {};// marca-modelo-año: instancia
    this.crearAuto = function (marca, modelo, año) {
        //implementacion singleton
        var referencia = marca + '-' + modelo + '-' + año;
        if (listaAutos[referencia]) {
            return listaAutos[referencia];
        } else {
            var auto = new Auto(marca, modelo, año);
            listaAutos[referencia] = auto;
            return auto
        }
    };
}

// Gestión del estado extrínseco
function BaseDeDatosDeAutos() {
    var listadoDeAutos = {};// id: {matricula, direccion, telefono, auto}
    //agregar nuevo registro
    this.nuevoRegistro = function ( marca, modelo, año,id, matricula, direccion, telefono) {
        var auto = fabricaDeAutos.crearAuto(marca, modelo, año);
        listadoDeAutos[id] = {
            //estado extrinseco
            matricula: matricula,
            direccion: direccion,
            telefono: telefono,
            //referecia a objeto de peso ligero
            auto: auto
        };
    };
    this.obtenerRegistro = function (id) {
        return listadoDeAutos[id];
    };
}

// Ejemplo de uso:
// Creación de la fábrica de objetos ligeros
var fabricaDeAutos = new FabricaDeAutos();
// Creación de la base de datos de vehículos
var baseDeDatos = new BaseDeDatosDeAutos();
// Registro de los dos primeros vehículos 
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('boton1')

    button.addEventListener('mousedown', () => {
        var id = document.getElementById('id').value;
        var marca = document.getElementById('marca').value;
        var modelo = document.getElementById('modelo').value;
        var año = document.getElementById('año').value;
        var matricula = document.getElementById('matricula').value;
        var direccion = document.getElementById('direccion').value;
        var telefono = document.getElementById('telefono').value;
        baseDeDatos.nuevoRegistro( marca, modelo, año,id, matricula, direccion, telefono);


    });

});
   // Obtenemos registros
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buscar1')

    button.addEventListener('mousedown', () => {
        var id = document.getElementById('buscarIm').value;
        var registro = baseDeDatos.obtenerRegistro(id);
        var marcab = registro.auto.marca;
        var modelob = registro.auto.modelo;
        var añob = registro.auto.añoDeFabricacion;
        var matriculab = registro.matricula;
        var direccionb = registro.direccion;
        var telefonob = registro.telefono;
        document.getElementById('marcaB').value = marcab;
        document.getElementById('modeloB').value = modelob;
        document.getElementById('añoB').value = añob;
        document.getElementById('matriculaB').value = matriculab;
        document.getElementById('direccionB').value = direccionb;
        document.getElementById('telefonoB').value = telefonob;
        console.log(registro);
    });

});
// Ejemplo de uso:
baseDeDatos.nuevoRegistro('Chevrolet', 'Luv', 1999, 30,
'LLA-1234', 'El valle',  'N/A');
baseDeDatos.nuevoRegistro('Chevrolet', 'Luv', 1999, 31,
'LLS-1221', 'El Sagrario', 'N/A');
// Obtenemos registros
var registro1 = baseDeDatos.obtenerRegistro(30);
var registro2 = baseDeDatos.obtenerRegistro(31);
// Comprobamos que ambos registros referencian al mismo objeto "auto"
console.log( registro1.coche === registro2.coche); // Muestra 'True'
