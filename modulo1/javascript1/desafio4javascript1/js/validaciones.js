function leerString(titulo, error) {
    let texto;
    do {
        texto = prompt(titulo)
        if (texto == null || texto.trim() == "")
            if (error != undefined)
                alert(error)
            else
                alert("No puede estar vacío")
    } while (texto == null || texto.trim() == "");

    return texto;
}

function leerNumeroEntero(mensaje, error) {
    let numero;
    do {
        numero = prompt(mensaje)
        if (numero == null || numero.trim() == "" || isNaN(numero))
            if (error != undefined)
                alert(error)
            else
                alert("Debe ingresar un número entero")  
    } while (numero == null || numero.trim() == "" || isNaN(numero))
    numero = parseInt(numero)
    return numero;
}