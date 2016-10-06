/**
 * Created by luizm on 06/10/2016.
 */
class Negociacao {

    constructor( data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume(){
        return this.valor * this.quantidade;
    }
}