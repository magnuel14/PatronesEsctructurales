import Impresora from "./Impresora.js";
class ImpresoraEpson extends Impresora{
    constructor(tinta,color){
        super(tinta,color);
    }
    print(){
        return "Impresora: Epson, Tinta:"+ this.tinta.tipo+" y el color es:"+ this.color.tipo;
    }
   
}
export default ImpresoraEpson;