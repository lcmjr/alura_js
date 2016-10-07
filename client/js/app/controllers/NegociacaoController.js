class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputdata = $("#data");
        this._inputquantidade = $("#quantidade");
        this._inputvalor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        let data = new Date(...this._inputdata.value.split('-')
            .map(function(item,indice){
                //0%1=0, 1%2=1 2%2=0 assim se evita o erro para corrigir o array do mes
                return item - indice % 2;
            }));
        console.log(data);
        /*let negociacao = new Negociacao(
            data,
            this._inputquantidade.value,
            this._inputvalor.value);
        console.log(negociacao);*/
    }
}