import TintaLiquida from "./TintaLiquida.js";
import TintaToner from "./TintaToner.js";
import TintaPolvo from "./TintaPolvo.js";
import ImpresoraEnder from "./ImpresoraEnder.js";
import ImpresoraEpson from "./ImpresoraEpson.js";
import ImpresoraAnet_A8 from "./ImpresoraAnet_A8.js";
import Colores from "./Colores.js";
import BlancoNegro from "./BlancoNegro.js";
//Tinta
const tintaLiquida = new TintaLiquida();
const tintaToner = new TintaToner();
const tintaPolvo = new TintaPolvo();

//Color
const blackAndWhite = new BlancoNegro();
const coloresB = new Colores("rojo-azul-amarillo");
const coloresS = new Colores("turqueza-fuxia-cian");



document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('normButton')

    button.addEventListener('mousedown', () => {
        var slecteNomrmal = document.getElementById('selcNormal').value;


        if (slecteNomrmal == '1') {
            const impresoraEpson1 = new ImpresoraEpson(tintaLiquida,coloresB);
            console.log(impresoraEpson1.print());
            const text1 = impresoraEpson1.print();
            document.f.ft.value = text1;

        } else if (slecteNomrmal == '2') {
            const impresoraEpson2 = new ImpresoraEpson(tintaLiquida,coloresS);
            console.log(impresoraEpson2.print());
            const text2 = impresoraEpson2.print();
            document.f.ft.value = text2;

        }else if (slecteNomrmal == '3') {
            const impresoraEpson2 = new ImpresoraEpson(tintaToner,blackAndWhite);
            console.log(impresoraEpson2.print());
            const text2 = impresoraEpson2.print();
            document.f.ft.value = text2;

        }
    })

})

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('3dButton')

    button.addEventListener('mousedown', () => {
        var slecteNomrmal = document.getElementById('selc3d').value;


        if (slecteNomrmal == '1') {
            const impresoraEnderP = new ImpresoraEnder(tintaPolvo,blackAndWhite);
            console.log(impresoraEnderP.print());
            const text3 = impresoraEnderP.print();
            document.f.ft.value = text3;

        } else if (slecteNomrmal == '2') {
            const impresoraAA8 = new ImpresoraAnet_A8(tintaPolvo,blackAndWhite);
            console.log(impresoraAA8.print());
            const text4 = impresoraAA8.print();
            document.f.ft.value = text4;

        }
    })

})