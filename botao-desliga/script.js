function desliga() {
    var meuBody = document.getElementById("fundo");

    if (meuBody.style.background == "white") {
        meuBody.style.background = "black";
        document.getElementById("mudaBotao").src = "./img/botaoLiga.png";
    } else {
        meuBody.style.background = "white";
        document.getElementById("mudaBotao").src = "./img/botaoDesliga.png";

    }
    console.log("Hello world")
}