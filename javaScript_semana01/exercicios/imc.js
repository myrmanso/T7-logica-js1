// Crie uma função que calcule o índice de massa corporal de uma pessoa (IMC)

function calcularIMC(){
    var altura = prompt("Qual a altura?");
    var peso = prompt("Qual o peso? ");
    var calculo = (peso/(altura**2));

    // console.log("Seu IMC é igual a: " + calculo).toFixed(2);
    //toFixed(x) estipula qnts casas depois da vírgula nós queremos que mostre.

    if(calculo < 18.5){
        alert("Você está abaixo do peso. Seu índice é: " + calculo);
    } 
    else if(calculo >= 18.5 && calculo < 24.9){
        alert("Você está normal. Seu índice é: " + calculo);
    }
    else if(calculo >= 25 && calculo < 29.9){
        alert("Você está normal. Seu índice é: " + calculo);
    }
    else {
        alert("Você está normal. Seu índice é: " + calculo);
    }
}