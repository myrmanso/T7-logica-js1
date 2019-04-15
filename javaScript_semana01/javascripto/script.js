var elogios = [
    "Mayaravigold",
    "Diva sem defeito",
    "Fada sensata",
    "Mayaravilinda",
    "Ícone incompreendido",
    "Máquina de vencer",
    "Zero defeitos",
    // "Você não é Github, mas é uma gatinha",
    
    // "Universal",
    
    // "Responsivo #SQN",
    
    // "Cristal",
    
    // "Jóia rara",
    // "Bombonzinho",
    // "Um neném",
    // "Um pão",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}