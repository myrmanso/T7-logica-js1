// let nota1 = parseInt(prompt("Digite a primeira nota:"));
// let nota2 = parseInt(prompt("Digite a segunda nota:"));
// let media = (nota1+nota2)/2;

// if (media >= 7 && media != 10){
//     document.write("Sua média é:" + media + ". Aluno aprovado!")
// }
// else if (media <7){
//     document.write("Sua média é:" + media + ". Reprovado!")
// }
// else if(media == 10){
//     document.write("Sua média é:" + media + ". Aprovado com Distinção!")
// }


let calculoMedia = document.querySelector('#media');

calculoMedia.addEventListener('click', function media() {

    let nota1 = parseFloat(document.querySelector('#nota1').value);
    let nota2 = parseFloat(document.querySelector('#nota2').value);
    let media = (nota1+nota2)/2;
    console.log(media);
    if (media >= 7){
        if(media == 10){
            alert("Sua média é: " + media + ". Aprovado com Distinção!");
        }else{
        alert("Sua média é: " + media + ". Aluno aprovado!");
        }
    }
    else{
        alert("Sua média é: " + media + ". Reprovado!");
    }
    
});

