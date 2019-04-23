function exibir() {
    
for(var a = 0, b = 10; a<=10 && b>=0; a++, b--){    
    document.write( a + " - " + b + "<br>");
}

}

function tabuada(){
    for(var a=1; a<=10; a++){
        let tab = 5*a;
        document.write('5 x ' + a+ " = " +tab+"<br>")
    }
}