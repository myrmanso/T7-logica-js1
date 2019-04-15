// Declare uma variável que receba um objeto vazio.

/*
Declare uma variável `pessoa`, que receba as suas informações pessoais, seguindo os tipos definidos abaixo:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `reprograma` - String
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: 'Mayara Cristina',
    sobrenome: 'Manso',
    idade: 25,
    altura: 1.57,
    reprograma: 'Front-end',
    andando: false,
    caminhouQuantosMetros: 0,
}


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversário = () => {
    pessoa.idade++;
}



/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

function andar(){
    var caminhar = prompt("Você caminhou?");

    if(caminhar == "sim"){
        var metros = parseInt(prompt("Quantos metros?"));
        pessoa.caminhouQuantosMetros += metros;
        document.write("Você andou " + pessoa.caminhouQuantosMetros)
    } else {
        document.write("Você não caminhou, ficou em casa danada!")
    }
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/



/*
Crie um método chamado `meuNomeCompleto`, que retorne a frase:
- "Meu nome é [NOME] [SOBRENOME]"
*/

pessoa.nomeCompleto = () => {
    
    console.log(pessoa.nome + " " + pessoa.sobrenome)
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "eu tenho [IDADE] anos"
*/

pessoa.mostrarIdade = () => {
    console.log("Eu tenho " + pessoa.idade + " anos.")
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "minha altura é [ALTURA]"
*/

pessoa.mostrarAltura = ()  => {
    console.log("Minha altura " + pessoa.altura + " .")
}

/*
Agora vamos mostrar as informações do objeto criado!
Qual o nome completo da pessoa? 
*/

pessoa.nomeCompleto()

/*
Qual a idade da pessoa? 
*/

pessoa.mostrarIdade()

/*
Qual a altura da pessoa?
*/

pessoa.mostrarAltura()

/*
Faça a `pessoa` fazer 3 aniversários.
*/
/*
Quantos anos a `pessoa` tem agora? 
*/

var cont = 0;

while (cont <4){
    fazerAniversário();
    cont++;
}

document.write("Agora você tem " + fazerAniversário())



/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

/*
A pessoa ainda está andando? 
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
Quantos metros a pessoa andou? 
*/

/*
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá! Meu nome é [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
*/