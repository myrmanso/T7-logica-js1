/*
Crie uma função que receba três notas como parâmetro e retorne a média, 
indicando se a pessoa passou ou se foi reprovada. 
*/

var mediaNotas = (nota1,nota2,nota3) => {
    var nota1, nota2, nota3, media;
    media = (nota1 + nota2 + nota3)/3;
    console.log(media);
    if (media >= 5){
        console.log("Passou de ano");
    } else{
        console.log("Reprovado");
    }
}