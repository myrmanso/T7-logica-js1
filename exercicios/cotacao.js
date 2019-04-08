// Crie uma função para converter bitcoin em reais, dada uma quantia e uma cotação.
var bitcon, cotacao, resultado;
bitcon = prompt("Quantos bitcons vc quer?");
cotacao = prompt("Quantos reais vale 1 bitcon hoje?");

function conversao() {
    resutado = bitcon * cotacao;
    alert("Você teria " + resultado + " reais");
}
