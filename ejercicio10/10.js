let div1 = document.getElementById("div1")
let resto = 0;

for (let i = 1; i <= 100; i++) {
    resto = i % 5;
    if (resto !== 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0) {
        console.log(i);
    }
}