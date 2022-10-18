
var arrAlumnos = []

//Las funciones de los botones se ejecutan luego de haber cargado la página completamente
window.onload = function () {
    //Se utiliza el manejador de Eventos
    document.getElementById("btnAprobar").onclick = calcularPromedio
    function calcularPromedio() {
        //Obtener los values de las notas del formulario "alumnos"
        var nota1 = document.alumnos.notaPract1.value
        var nota2 = document.alumnos.notaPract2.value
        var nota3 = document.alumnos.notaPract3.value
        var nota4 = document.alumnos.notaPract4.value
        var nota5 = document.alumnos.notaTeor.value

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
    }

    document.getElementById("btnRegistrar").addEventListener("click", function () {
        //Se busca el div por su ID
        let alumAprobados = document.getElementById("alumAprobados")
        let alumReprobados = document.getElementById("alumReprobados")
        let alumnoRegistrado = document.getElementById("alumnoRegistrado")
        let divErrorVali = document.getElementById("errorValidacion")
        let divContador = document.getElementById("contador")
        let registroCorrecto = document.getElementById("registrado")
        var nombre = document.alumnos.nombre.value
        nombre = nombre.toUpperCase()
        let validacion = validar()

        //Se validan los inputs introducidos
        
        //Si la función retorna falso se muestra el div con el mensaje de error, sino, se agrega al arreglo el alumno
        if (validacion == false) {
            divErrorVali.style.display = "block"
        }
        else {
            //Si el nombre ya se encuentra en el arreglo, se muestra el div de error
            if (arrAlumnos.includes(nombre)) {
                alumnoRegistrado.style.display = "block"
                aprobo.style.display = "none"
                noAprobo.style.display = "none"
                registroCorrecto.style.display = "none"
                divErrorVali.style.display = "none"
            }
            //Sino, se agrega al arreglo y se muestra el div con los contadores
            else {
                arrAlumnos.push(nombre)

                //Si el alumno aprobó aumenta el contador de aprobados, sino, aumenta el de reprobados
                if (document.alumnos.promedio.value >= 80 && document.alumnos.notaTeor.value >= 80) {
                    alumAprobados.innerText++
                }
                else {
                    alumReprobados.innerText++
                }

                divErrorVali.style.display = "none"
                registroCorrecto.style.display = "block"
                alumnoRegistrado.style.display = "none"
                divContador.style.display = "block"

                agregarTabla(document.alumnos.nombre.value,
                    document.alumnos.notaPract1.value,
                    document.alumnos.notaPract2.value,
                    document.alumnos.notaPract3.value,
                    document.alumnos.notaPract4.value,
                    document.alumnos.notaTeor.value)

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
        }
    })

    //Se crea la función que generará valores aleatorios para las notas entre 0 y 100
    document.getElementById("btnGenerarNota").addEventListener("click", () => {
        let notas = document.getElementsByClassName("nota")
        for (i = 0; i < notas.length; i++) {
            notas[i].value = (Math.random() * 100).toFixed()
        }
    })
}


function agregarTabla(nombre, nota1, nota2, nota3, nota4, nota5) {
    //Se crea el elemento estatus que mostrará en la tabla si el alumno está aprobado o no
    let estatus = document.createElement("p")
    //Se calcula el promedio de las 5 notas
    let promedioTotal = ((parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)) / 5).toFixed(2)
    //Se busca la tabla por su id
    let tabla = document.getElementById("tabla")
    //Se muestra y se crea la fila
    tabla.style.display = "block"
    let fila = tabla.insertRow(-1)

    //Se crean las celdas y se le asignan sus valores
    let celda = fila.insertCell(-1)

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
    celda.innerText = promedioTotal
    if(promedioTotal >= 80)
        estatus.innerText = "Superado"
    else
        estatus.innerText = "No Superado"
    celda = fila.insertCell(-1)
    celda.appendChild(estatus)
}

function validar() {
    let nombre = document.alumnos.nombre.value
    let nota1 = document.alumnos.notaPract1.value
    let nota2 = document.alumnos.notaPract2.value
    let nota3 = document.alumnos.notaPract3.value
    let nota4 = document.alumnos.notaPract4.value
    let nota5 = document.alumnos.notaTeor.value

    if (nombre.trim() == "" || nota1.trim() == "" || nota2.trim() == "" || nota3.trim() == "" || nota4.trim() == "" || nota5.trim() == "")
        return false
    else
        return true
}

