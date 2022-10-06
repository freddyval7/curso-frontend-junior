var arrAlumnos = []

function calcularPromedio() {
    //Obtener los values de las notas del formulario "alumnos"
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
    let aprobo = document.getElementById("aprobo")
    let noAprobo = document.getElementById("noAprobo")
    let alumAprobados = document.getElementById("alumAprobados")
    let alumReprobados = document.getElementById("alumReprobados")
    //Si el promedio y la nota teórica es mayor o igual a 80 se muestra el span de que aprobó
    if (promedio >= 80 && nota5 >= 80){
        aprobo.style.display = "block"
        alumAprobados.innerText++
        //Se crea la variable n para guardar el contador
        n = alumAprobados
    }
    //Sino, se muestra el span de que no aprobó
    else{
        noAprobo.style.display = "block"
        alumReprobados.innerText++
        n = alumReprobados
    }
    document.getElementById("btnRegistrar").disabled = false
}

function registrarAlumno() {
    //Se busca el div por su ID
    let alumnoRegistrado = document.getElementById("alumnoRegistrado")
    let divContador = document.getElementById("contador")
    let registroCorrecto = document.getElementById("registrado")
    let nombre = document.alumnos.nombre.value
    nombre = nombre.toUpperCase()
    //Si el nombre ya se encuentra en el arreglo, se muestra el div de error
    if (arrAlumnos.includes(nombre)) {
        alumnoRegistrado.style.display = "block"
        //Se resta el contador si el alumno ya estaba registrado
        n.innerText--
    }
    //Sino, se agrega al arreglo y se muestra el div con los contadores
    else {
        arrAlumnos.push(nombre)
        registroCorrecto.style.display = "block"
        alumnoRegistrado.style.display = "none"
        divContador.style.display = "block"
    }
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