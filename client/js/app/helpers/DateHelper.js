class DateHelper{

    textoParaData(texto){
        /*
         ... = para retornar o array na ordem como parametro ex: array[0] parametro[0]
         => = arrow function não se torna nescessário escrever function,
         com somente uma instrução não precisa de bloco {} e ele ja retornara o resultado
         0%1=0, 1%2=1 2%2=0 assim se evita o erro para corrigir o array de data*/
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

    dataParaTexto(data){
        return data.getDate()
        + '/' + (data.getMonth()+1)
        + '/' + data.getFullYear()
    }
}