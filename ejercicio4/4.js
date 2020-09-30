let div1 = document.getElementById("div1");
let numero=parseInt(window.prompt("Dame un numero"))
let suma=0;
let media=10;
let i=1;
while(i<=10){
    suma = suma + numero
    numero=parseInt(window.prompt("Dame un numero"))
    i=i+1
}


let total=suma / media

document.write(total)