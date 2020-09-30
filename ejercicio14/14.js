
let div1 = document.getElementById("div1")

let numero=parseInt(window.prompt("Introduce un número"));
let linea=0
let asterisco="*"


for ( let i=1; i<=numero; i++){
    
    for(let j=1; j<=i;j++){
        document.write("*")
    }
   document.write("<br\>")
}