const operacion = prompt(" Para el promedio 1 para el sueldo 2 ")

console.log(operacion)
switch (operacion) {
    case "1":
        primedio()
        break;
        case "2":
        tuSueldo()
        break;
    default:
        alert("el numero no es correcto")
        break;

}

function tuSueldo (){
    const precioHora = prompt("Ingrese el precio de tus horas")
    const horasTrabajadas = prompt("Ingrese las horas trabajadas") 

    const sueldo = precioHora * horasTrabajadas
    alert("Tu sueldo este mes de: " + sueldo +"DOP")
}

function promedio () {
    //Declarar la variable 
    const nu1 = prompt("Ingrese el numero 1")
    const nu2 = prompt("Ingrese el primer 2")
    const nu3 = prompt("Ingrese el primer 3")
    
    //covertir a entero
    const nu1Int = Number(nu1)
    const nu2Int = Number(nu2)
    const nu3Int = Number(nu3)
    
    //sumar los numero
    const resultado = nu1Int + nu2Int + nu3Int
    
    //calcular el promedio
    const promedio = resultado / 3
    // mostrar el resultado
    
    alert(" Promedio de los tres numeros es:" + promedio )
    }
    
    
    