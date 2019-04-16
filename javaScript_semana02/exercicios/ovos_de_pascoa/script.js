window.addEventListener('DOMContentLoaded', function() {
    // aqui vai todo o código a ser executado na página

    const paises = document.querySelector('#pais');
    const cidade = document.querySelector('#cidade');
    const resultado = document.querySelector('#resultado');
    const escondido = document.querySelector('.escondido')

    paises.addEventListener('click', function() { 
        resultado.innerHTML="";        
        escondido.style.display = "none";

        let clique = this.value; //this pega a váriavel paises e monitora os valores contidos nessa vriavel

        if (clique == "br"){
            escondido.style.display = "block";

            cidade.addEventListener('click', function() {
                let clique = this.value;

                if(clique == "sp"){
                    resultado.innerHTML = `🍬 Minha amiga vai ganhar duas caixas de bombons 🍫`;
                }

                else if(clique == "cs"){
                    resultado.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬`;
                }
                else if(clique == "pa"){
                    resultado.innerHTML = `🍬 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫`;
                }
                else{
                    resultado.innerHTML="";     
                }                
            });    
        }
        else if(clique == "au"){
            resultado.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;
        }
        else if(clique == "eua"){
            resultado.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`;
        }
        else if(clique == "uk"){
            resultado.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;
        }
        else{
            resultado.innerHTML="";
        }
    });
});