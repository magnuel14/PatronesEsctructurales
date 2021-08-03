import Impresora from "./Impresora.js";
class ImpresoraAnet_A8 extends Impresora{
    constructor(tinta,color){
        super(tinta,color);
    }
    print(){
        return "Impresora: ANET A8, Tinta:"+ this.tinta.tipo+" y el color es:"+ this.color.tipo;
    }

}
export default ImpresoraAnet_A8;