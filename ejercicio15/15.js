let div1 = document.getElementById("div1")
let contrasena = window.prompt("Introduce la contraseña");
let expq = "(?:.*\d){1}"
let encontradosNum
let encontradoMayus
if (contrasena.length >= 8) {
    for (i = 1; i <= contrasena.length; i++) {
        encontradosNum = contrasena.match(expq)
        window.alert(encontradosNum)
    }
    if (encontradosNum != null) {
        window.alert("ccc")
    } else {
        window.alert("ddd")
    }
    encontradoMayus = contrasena.substring(0, 1).match("^[A-Z]$")
    if (encontradosNum && encontradoMayus) {
        window.alert("aaa")
    } else {
        window.alert("bbb")
    }
}

