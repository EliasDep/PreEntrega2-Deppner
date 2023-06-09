// CREAR CLASE EMPLEADO

class Empleado {
    constructor (nombre, edad, puesto, antiguedad) {
        this.nombre = nombre
        this.edad = edad
        this.puesto = puesto
        this.antiguedad = antiguedad
    }
}



// CREAR LISTA DE OBJETOS

const empleados = []

empleados.push (new Empleado ('MARTIN', 25 , 'Programador', 3))
empleados.push (new Empleado ('LARA', 28 , 'Recursos Humanos', 5))
empleados.push (new Empleado ('MATIAS', 21, 'Atencion', 5))
empleados.push (new Empleado ('JULIA', 23, 'Marketing', 4))
empleados.push (new Empleado ('ANA', 27 , 'Marketing', 2))



// FUNCION

function buscarEmpleado (a, nombre){
    return a.find (objeto => objeto.nombre === nombre.toUpperCase())
}



// BUCLE DE BUSQUEDA

let continuar = 0

while (continuar == 0) {
    let busqueda = buscarEmpleado (empleados, prompt ('Ingresar nombre empleado: '))

    if (busqueda != undefined) {
        alert ('Empleado: ' + busqueda.nombre + '\n' +
        'Edad: '+ busqueda.edad + '\n' +
        'Puesto: ' + busqueda.puesto + '\n' +
        'Antiguedad: ' + busqueda.antiguedad)
    }
    else {
        alert ('No existe empleado con ese nombre')

        let nuevo = prompt ('Desea agregarlo? (por numero)' + '\n' +
                            '0) SI' + '\n' +
                            '-1) NO')

        if (nuevo == 0) {
            let nombre = prompt ('Nombre')
            let edad = prompt ('Edad')
            let puesto = prompt ('Puesto')
            let antiguedad = prompt ('Antiguedad')

            empleados.push (new Empleado (nombre, edad, puesto, antiguedad))

            alert ('El empleado se cargo correctamente')
        }
    }

    continuar = prompt ('Desea hacer otra busqueda? (por numero)' + '\n' +
                            '0) SI' + '\n' +
                            '-1) NO')
}



// MOSTRAR LISTA FINAL

empleados.forEach (function (objeto) {
    let mensaje = 'Nombre: ' + objeto.nombre + '\n' +
                'Edad: ' + objeto.edad + '\n' +
                'Puesto: ' + objeto.puesto + '\n' +
                'Antiguedad: ' + objeto.antiguedad

    alert (mensaje)
})