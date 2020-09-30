let div1 = document.getElementById("div1")
let num;

let numInvertido = "";
do {
    num = window.prompt("escribe una cifra");
    let x = num.length;
    while (x >= 0) {
        numInvertido = numInvertido + num.substring(x - 1, x);
        x--;
    }
    document.write(numInvertido);
    document.write(`<br/>`);
    numInvertido = "";
} while (num !== "0");