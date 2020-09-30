let sumaValores = 0
let valor = parseInt(window.prompt("Escribe un número"));
let div1 = document.getElementById("div1");
while (valor !== 0) {
    if (valor < 0) {
        window.alert("No se aceptan números negativos");
    } else {
        sumaValores = sumaValores + valor;
    }
    valor = parseInt(window.prompt("Escribe un número"));

}
window.alert(`La suma es ${sumaValores}`);