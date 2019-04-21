function calculatabuada () {


    //obter o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //obter o valorA do campo input number e converter em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //limpar o conteudo do tbody para comecar do zero
    tabuada.innerHTML = '';

    //iteracao de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {
        //calcula o resultado
        let resultado = valorA * valorB;
        //cria o template das colunhas da linha actual
        let template = `
    
        <td>${valorA}</td>
        <td>*</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>    
        
        `;
        //cria o elemeto tr - linha
        let tr = document.createElement('tr');
        //insere as colunas na linha
        tr.innerHTML = template;
        //insere a linha na tabela
        tabuada.append(tr);

    }//fechando o for 

}//fecha a funcao

//chama a funcao pela primeira vez
calculatabuada();

//adiciona evento de alteracao ao campo numero
document.querySelector("#valorA"),addEventListener('change', calculatabuada);