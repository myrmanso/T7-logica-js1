window.addEventListener('DOMContentLoaded', function (event) {

    const gerarResultado = document.querySelector('#resultado'); //botão de ação para gerar o resultado
    const opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']; //lista de opções
    const result = document.querySelector('#result'); //O resultado que vai aparecer na tela
    /*let nomeUsuario = document.querySelector("#nome").value; ${nomeUsuario}*/




    // const getNome = document.querySelector('#getNome');//vai pegar esse id e gerar uma função
    // const escondidoNome = document.querySelector('.escondido--nome'); //Varável pega as característica dessa  classes
    // const escondidoEscolha = document.querySelector('.escondido--escolha'); //Varável pega as característica dessa  classes


    //JOGO
    gerarResultado.addEventListener('click', function () {

        const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]; //escolha do computador
        const escolha = document.querySelector("#escolhaUsuario").value;
        const escolhaUsuario = escolha.toLowerCase();




        console.log(escolhaUsuario);

        switch (escolhaComputador) {
            case 'pedra':
                if (escolhaUsuario == escolhaComputador) {
                    result.innerHTML = "Empate!";
                }
                else if (escolhaUsuario == "tesoura" || escolhaUsuario == "lagarto") {
                    result.innerHTML = ` você perdeu! Computador colocou ${escolhaComputador}.`;
                }
                else {
                    result.innerHTML = ` você ganhou! Computador colocou ${escolhaComputador}.`;
                }
                break;
            case 'papel':
                if (escolhaUsuario == escolhaComputador) {
                    result.innerHTML = "Empate!";
                }
                else if (escolhaUsuario == "pedra" || escolhaUsuario == "spock") {
                    result.innerHTML = ` você perdeu! Computador colocou ${escolhaComputador}.`;
                }
                else {
                    result.innerHTML = ` você ganhou! Computador colocou ${escolhaComputador}.`;
                }
                break;
            case 'tesoura':
                if (escolhaUsuario == escolhaComputador) {
                    result.innerHTML = "Empate!";
                }
                else if (escolhaUsuario == "papel" || escolhaUsuario == "lagarto") {
                    result.innerHTML = ` você perdeu! Computador colocou ${escolhaComputador}.`;
                }
                else {
                    result.innerHTML = ` você ganhou! Computador colocou ${escolhaComputador}.`;
                }
                break;
            case 'lagarto':
                if (escolhaUsuario == escolhaComputador) {
                    result.innerHTML = "Empate!";
                }
                else if (escolhaUsuario == "papel" || escolhaUsuario == "spock") {
                    result.innerHTML = ` você perdeu! Computador colocou ${escolhaComputador}.`;
                }
                else {
                    result.innerHTML = ` você ganhou! Computador colocou ${escolhaComputador}.`;
                }
                break;
            case 'spock':
                if (escolhaUsuario == escolhaComputador) {
                    result.innerHTML = "Empate!";
                }
                else if (escolhaUsuario == "pedra" || escolhaUsuario == "tesoura") {
                    result.innerHTML = ` você perdeu! Computador colocou ${escolhaComputador}.`;
                }
                else {
                    result.innerHTML = ` você ganhou! Computador colocou ${escolhaComputador}.`;
                }
                break;

            default:
                alert('Por favor insira papel, tesoura, pedra, largato ou spock para jogar');
                break;
        };

    });







});