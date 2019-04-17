window.addEventListener('DOMContentLoaded', function (event) {

    const jogar = document.querySelector('#play');//botão do jogo

    jogar.addEventListener('click', function () {
        const filmes = ["./assets/img/mulan.gif", "./assets/img/hp_prisioneiro_de_askaban.gif", "./assets/img/persepolis.gif"]//colocar o caminho das gifs aqui.
        const img = document.querySelector('#gif');
        const resposta = document.querySelector('#resposta');

        img.src = filmes[0];
        setTimeout(() => {img.src = filmes[1]}, 4000);
        setTimeout(() => {img.src = filmes[2]}, 8000);
        setTimeout(() => {resposta.innerHTML = `<p>Mulan</p>
        <p>Harry Potter e o Prisioneiro de Azkaban</p>
        <p>Persépolis</p>`}, 12000);
    });
});
