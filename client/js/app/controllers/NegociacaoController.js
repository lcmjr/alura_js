class NegociacaoController{
    adiciona(event){
        event.preventDefault();

        let $ = document.querySelector.bind(document);
        
        let inputdata = $("#data");
        let inputquantidade = $("#quantidade");
        let inputvalor = $("#valor");

        console.log(inputdata.value);
        console.log(inputquantidade.value);
        console.log(inputvalor.value);
    }
}