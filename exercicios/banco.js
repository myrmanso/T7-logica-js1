/*
Crie um objeto que simule uma conta corrente, com as seguintes chaves: nome, agencia, conta e saldo.
Depois, crie funções para depositar dinheiro, remover dinheiro, consultar saldo da conta e mostrar todos os dados da conta;
*/

var conta = {
    nome: "Nubank",
    agencia: 0001,
    conta: 1010,
    saldo: 1,
}

var depositarDinheiros = function(valor){
    var valor;
    conta.saldo += valor;
    return conta.saldo;
}

var removerDinheiros = function(valor){
    var valor;
    conta.saldo -= valor;
    return conta.saldo;
}

var consultarSaldo = function(){
    console.log("SALDO: " + conta.saldo)
}

var mostrarDados = function(){
    console.log(conta);
}