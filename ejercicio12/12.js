let div1 = document.getElementById("div1")
let digito=window.prompt("escribe 3 digitos"); 
let suma=0
let valor=0
for(let i=0; i<=digito.length-1;i++){
   valor=parseInt(digito[i]);
   suma = suma + valor;
    
}
document.write(suma)

