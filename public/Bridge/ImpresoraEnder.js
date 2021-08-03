import Impresora from "./Impresora.js";
class ImpresoraEnder extends Impresora{
    constructor(tinta,color){
        super(tinta,color);
    }
    print(){
        return "Impresora: Ender, Tinta::"+ this.tinta.tipo+" y el color es:"+ this.color.tipo;
    }
    
   
}
export default ImpresoraEnder;