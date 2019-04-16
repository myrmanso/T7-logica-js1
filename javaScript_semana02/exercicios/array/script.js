// Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) e mostre na tela a quantidade de variáveis do array e também os nomes dos cachorros.

window.addEventListener('DOMContentLoaded', function (event) {

    const gatos = ['Ariel', 'Susy', 'Cherry', 'Zeca', 'Damon'];
    const titulo = document.querySelector("#titulo");
    const nomes = document.querySelector("#itens");


    
    titulo.innerHTML = (`O array gatos tem ${gatos.length} nomes:`);
    
    gatos.forEach(function (item, index) {

        let listaNomes = document.createElement("li"); //vai no documento e cria uma li;
        listaNomes.innerHTML = item; //Na li que você criou vai no HTML e insere o item da lista
        nomes.appendChild(listaNomes); //Na ul que você criou você vai concatenar a variável que cria li novamente até                                     não ter mais item

    });
 
   
});