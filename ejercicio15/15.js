let div1 = document.getElementById("div1")
let contrasena = window.prompt("Introduce la contraseña");
let expq = "(?:.*\d){1}"
let encontradosNum
let encontradoMayus
var re = new RegExp("[0-9]{1,}")
var reL = new RegExp("^[A-Z]")


if (contrasena.length >= 8) {
    let machN = re.test(contrasena.toString())
    if (machN){
        let machL = reL.test(contrasena.toString())
        if (machL) {
            window.alert("Contraseña correcta")
        } else {
            window.alert("Contraseña incorrecta")
        }
    }else{
        window.alert("Contraseña incorrecta")
    }
  
}else{
    window.alert("Contraseña incorrecta") 
}

