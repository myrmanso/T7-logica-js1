function calcularIMC() {
    let peso, altura, resultado, text, resposta, gif, lugarGif, cssclass;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    resposta = document.getElementById("resposta");
    lugarGif = document.getElementById("lugarGif");
    resultado = peso / (altura**2);
    
    console.log("Seu IMC é" + resultado.toFixed(2));

    if (resultado <18) {
        text = "Uma Deusa! 🎵";
        gif = `<img src="https://media.tenor.com/images/195bfe58677344501232cea5c627ac48/tenor.gif" alt="gif da Gretchen de coroa recebendo um manto de rainha">`;
        cssclass = "linha1";
    }
    else if (resultado >= 18 && resultado <25) {
        text = "Uma feiticeira 🎵";
        gif = `<img src="https://media.tenor.com/images/e51ad0ced6aabffdff68c3fd7098d72e/tenor.gif" alt="gif da inês Brasil caminhando no corredor de um hotel">`;
        cssclass = "linha2";
    }
    else if (resultado >= 25 && resultado <30) {
        text = "Uma louca! 🎵";
        gif = `<img src="https://media.giphy.com/media/3o7bu875tEiFIK1fK8/giphy.gif" alt="gif da Nazaré Tedesco se elegiando">`;
        cssclass = "linha3";
    }
    else if (resultado >= 30 && resultado < 40) {
        text = "Ela é demais! 🎵";
        gif = `<img src="https://media1.tenor.com/images/82fb3a62b2addde84c4ebf0ea047b603/tenor.gif?itemid=5722819" alt="gif da Inês Brasil falando 'É aquele ditado né?' ">`;
        cssclass = "linha4";
    }
    else{
        text = "Meu Deus, ela é demai   s! 🎵";
        gif = `<img src="https://media1.tenor.com/images/ec3ce4f65e78c85a0bb4fdd72869e2e4/tenor.gif?itemid=11179045" alt="gif do rosto da gretchen dentro do sol do teletubies">`
        cssclass = "linha5";
    }
    resposta.innerHTML = "Seu IMC é " + resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
    
}