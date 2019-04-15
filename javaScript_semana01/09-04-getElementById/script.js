    //`tags de html sempre entre crases`


var gifs = [
    `<img src="./img/gif1.gif" alt="gif de gatinho">`,
    `<img src="./img/gif2.gif" alt="gif de gatinho">`,
    `<img src="./img/gif3.gif" alt="gif de gatinho">`,
    `<img src="./img/gif4.gif" alt="gif de gatinho">`,
    `<img src="./img/gif5.gif" alt="gif de gatinho">`,
]

function sortearGifs() {
    var random = Math.floor(Math.random()*3);
    document.getElementById('ondeVaoAsGifs').innerHTML = gifs[random];
}