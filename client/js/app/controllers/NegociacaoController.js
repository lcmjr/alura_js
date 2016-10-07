class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputdata = $("#data");
        this._inputquantidade = $("#quantidade");
        this._inputvalor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        /*
        ... = para retornar o array na ordem como parametro ex: array[0] parametro[0]
        => = arrow function não se torna nescessário escrever function,
        com somente uma instrução não precisa de bloco {} e ele ja retornara o resultado
        0%1=0, 1%2=1 2%2=0 assim se evita o erro para corrigir o array de data*/
        let data = new Date(...this._inputdata.value.split('-')
            .map((item,indice) => item - indice % 2));
                
        let negociacao = new Negociacao(
            data,
            this._inputquantidade.value,
            this._inputvalor.value);
        console.log(negociacao);
    }
}