let menu = "Ingrese 1 para registrarse\nIngrese 2 para calcular comision\nIngrese 3 para salir"
let opciones = 0

function registrarse(nombre, apellido) {
    if ((isNaN(nombre)) && nombre != " " && (isNaN(apellido)) && apellido != " ") {
        let registro = nombre + " " + apellido
        alert("Bienvenidx " + registro)
        return registro
    } else {
        alert("Por favor ingrese correctamente los datos solicitados")
    }
}
function comision(numUno, numDos) {
    return (numUno * numDos) / 100
}

do {
    alert(menu)
    opciones = Number(prompt("Ingrese la opcion que desea ejecutar:"))
} while (isNaN(opciones));

switch (opciones) {
    case 1:
        let nombre = prompt("Ingrese nombre")
        let apellido = prompt("Ingrese apellido")
        registrarse(nombre, apellido)
        break;
    case 2:
        let numUno = Number(prompt("Le recordamos que la comision es del 5%. Ingrese monto total a enviar:"))
        let respuesta = comision(numUno, 5)
        alert("La comision es de " + respuesta)
        break;
    case 3:
        break
    default:
        alert("Valor no encontrado en la base de datos. Vuelva a intentar")
        break;
}