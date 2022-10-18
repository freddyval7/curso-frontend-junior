var arrAlumnos = []
var estatus = document.createElement("p")

// function validar(nom,nt1,nt2,nt3,nt4,nt5){
//     nom = document.alumnos.nombre.value
//     nt1 = document.alumnos.notaPract1.value
//     nt2 = document.alumnos.notaPract2.value
//     nt3 = document.alumnos.notaPract3.value
//     nt4 = document.alumnos.notaPract4.value
//     nt5 = document.alumnos.notaTeor.value
//     if (nom.trim() == "")
//         alert("Debe escribir el nombre")
//         else if (nt1.trim() == "" || isNaN(nt1))
//             alert("Debe escribir la nota")
//             else if (nt2.trim() == "" || isNaN(nt2))
//                 alert("Debe escribir la nota")
//                 else if (nt3.trim() == "" || isNaN(nt3))
//                     alert("Debe escribir la nota")
//                     else if (nt4.trim() == "" || isNaN(nt4))
//                         alert("Debe escribir la nota")
//                         else if (nt5.trim() == "" || isNaN(nt5))
//                             alert("Debe escribir la nota")

// }

document.getElementById("btnAprobar").onclick = calcularPromedio
function calcularPromedio(validar,nombre,nota1,nota2,nota3,nota4,nota5) {
    //Obtener los values de las notas del formulario "alumnos"
    let nombre = document.alumnos.nombre.value
    let nota1 = document.alumnos.notaPract1.value
    let nota2 = document.alumnos.notaPract2.value
    let nota3 = document.alumnos.notaPract3.value
    let nota4 = document.alumnos.notaPract4.value
    let nota5 = document.alumnos.notaTeor.value
            
    //Se calcula el promedio según las 4 notas introducidas en los inputs
    document.alumnos.promedio.value = ((parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4).toFixed(2)
    //Se guarda el value en la variable promedio
    let promedio = document.alumnos.promedio.value

    //Se obtienen los elementos por su ID
    var aprobo = document.getElementById("aprobo")
    var noAprobo = document.getElementById("noAprobo")
    //Si el promedio y la nota teórica es mayor o igual a 80 se muestra el span de que aprobó
    if (promedio >= 80 && nota5 >= 80) {
        aprobo.style.display = "block"
        noAprobo.style.display = "none"
    }
    //Sino, se muestra el span de que no aprobó
    else {
        noAprobo.style.display = "block"
        aprobo.style.display = "none"
    }
    document.getElementById("btnRegistrar").disabled = false
}

document.getElementById("btnRegistrar").addEventListener("click", function () {
    //Se busca el div por su ID
    let alumAprobados = document.getElementById("alumAprobados")
    let alumReprobados = document.getElementById("alumReprobados")
    let alumnoRegistrado = document.getElementById("alumnoRegistrado")
    let divContador = document.getElementById("contador")
    let registroCorrecto = document.getElementById("registrado")
    let nombre = document.alumnos.nombre.value
    nombre = nombre.toUpperCase()
    //Si el nombre ya se encuentra en el arreglo, se muestra el div de error
    if (arrAlumnos.includes(nombre)) {
        alumnoRegistrado.style.display = "block"
        aprobo.style.display = "none"
        noAprobo.style.display = "none"
        registroCorrecto.style.display = "none"
        divContador.style.display = "none"
    }
    //Sino, se agrega al arreglo y se muestra el div con los contadores
    else {
        arrAlumnos.push(nombre)

        //Si el alumno aprobó aumenta el contador de aprobados, sino, aumenta el de reprobados
        if (document.alumnos.promedio.value >= 80 && document.alumnos.notaTeor.value >= 80) {
            alumAprobados.innerText++
            alumAprobado.innerText = "Si"
        }
        else {
            alumReprobados.innerText++
            alumAprobado.innerText = "No"
        }

        registroCorrecto.style.display = "block"
        alumnoRegistrado.style.display = "none"
        divContador.style.display = "block"

        agregarTabla(document.alumnos.nombre.value,
            document.alumnos.notaPract1.value,
            document.alumnos.notaPract2.value,
            document.alumnos.notaPract3.value,
            document.alumnos.notaPract1.value,
            document.alumnos.notaTeor.value,
            document.alumnos.promedio.value)

        //Se resetean los inputs
        document.alumnos.notaPract1.value = ""
        document.alumnos.notaPract2.value = ""
        document.alumnos.notaPract3.value = ""
        document.alumnos.notaPract4.value = ""
        document.alumnos.notaTeor.value = ""
        document.alumnos.promedio.value = "0"
        document.alumnos.nombre.value = ""
        aprobo.style.display = "none"
        noAprobo.style.display = "none"
    }
})

function agregarTabla(nombre, nota1, nota2, nota3, nota4, nota5, promedio) {
    let tabla = document.getElementById("tabla")

    tabla.style.display = "block"
    let fila = tabla.insertRow(-1)

    let celda = fila.insertCell(-1)

    celda = fila.insertCell(-1)
    celda.innerText = fila.rowIndex
    celda = fila.insertCell(-1)
    celda.innerText = nombre
    celda = fila.insertCell(-1)
    celda.innerText = nota1
    celda = fila.insertCell(-1)
    celda.innerText = nota2
    celda = fila.insertCell(-1)
    celda.innerText = nota3
    celda = fila.insertCell(-1)
    celda.innerText = nota4
    celda = fila.insertCell(-1)
    celda.innerText = nota5
    celda = fila.insertCell(-1)
    celda.innerText = promedio
    celda = fila.insertCell(-1)
    celda.appendChild(estatus)
    celda = fila.insertCell(-1)
}