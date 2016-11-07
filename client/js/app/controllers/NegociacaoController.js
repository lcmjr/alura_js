class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputdata = $("#data");
        this._inputquantidade = $("#quantidade");
        this._inputvalor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputdata.value);

        let negociacao = new Negociacao(
            data,
            this._inputquantidade.value,
            this._inputvalor.value);
        console.log(negociacao);

        console.log(helper.dataParaTexto(negociacao.data));
    }
}