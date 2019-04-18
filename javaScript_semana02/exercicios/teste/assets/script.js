window.addEventListener('DOMContentLoaded', function (event) {
    const gDia = document.querySelectorAll('input[name="gretchen-dia"]');
    console.log(gDia);

    for(i=0, i<gDia.length, i++){
        if{
            gDia[i].value = "disposta"
        }
        
    }

    gDia[0].addEventListener('click', mostrarResultado(e));
    gDia[1].addEventListener('click', mostrarResultado(e));
    gDia[2].addEventListener('click', mostrarResultado(e));

    function mostrarResultado(event) {
        console.log('aloka')
        let dia = gDia[i].value;
        const respostaDia = document.querySelector('#respostaDia');
        const resultadoDia = ["./assets/img/g-sol.gif", "./assets/img/cinco-min.gif", "./assets/img/n-despertador.gif", "./assets/img/quem-acorda.gif"];

        switch (dia) {
            case "disposta":
                respostaDia.src = resultadoDia[0];                
                break;
            case "cinco":
                respostaDia.src = resultadoDia[0];                
                break;
            case "despertador":
                respostaDia.src = resultadoDia[0];                
                break;
            case "quemAcorda":
                respostaDia.src = resultadoDia[0];                
                break;
            default:
                break;
        };


    }
});