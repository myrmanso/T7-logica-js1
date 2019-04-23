function entrar() {

    let senha = '';
    do{
        
        senha = prompt('Digite sua senha')
        if(senha == '2112js'){
            alert('Entrando no sistema...');  
        } else{
            alert('Senha incorreta, digite sua senha!');
        }
    }while(senha !== '2112js')
    
} 
