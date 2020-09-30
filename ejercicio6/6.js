let div1 = document.getElementById("div1")
let resultado=1

for(let i=1;i<=10;i++){
    resultado=1
    document.write(i);
    document.write("->");
    for(let j=1;j<=i;j++){
        resultado=resultado*j
    }
    document.write(resultado);
    document.write("<br\>")
}