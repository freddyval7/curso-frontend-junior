let modelos = []
let precios = []
let arrEstatus = []
let contNuevos = 0
let contViejos = 0
let n = 0
let acum = 0

do {
    //debugger;
    let modelo;
    // Se utiliza la función leerString para validar la string introducida por el usuario
    modelo = leerString(`Ingrese el modelo del carro ${modelos.length + 1}`,
        "Debe escribir el modelo, pruebe otra vez...")

    // Se comprueba que el modelo no está incluido
    modelo = modelo.toUpperCase()
    if (modelos.includes(modelo))
        alert(`El modelo ${modelo} ya está registrado, ingrese uno diferente`)
    else {
        // Se usa la función leerNumeroEntero para validar el número entero
        let precio;
        precio = leerNumeroEntero(`Ingrese el precio del ${modelo}: `)

        let estatus;
        estatus = confirm("El carro es nuevo o usado? (Aceptar para nuevo, Cancelar para usado)")

        // Si el carro es nuevo se añade al principio del arreglo sino al final
        if (estatus == true) {
            modelos.unshift(modelo);
            precios.unshift(precio);
            arrEstatus.unshift(estatus);

        } else {
            modelos.push(modelo);
            precios.push(precio);
            arrEstatus.push(estatus);
        }
        n++
    } 
} while (confirm("Desea continuar?"))


for (i = 0; i < n; i++) {
    // Se cuentan los carros nuevos y usados
    if (arrEstatus[i] == true)
        contNuevos++;
    else
        contViejos++;

    // Se calcula el precio promedio de los carros
    acum += precios[i];
}

let promedio = acum / n;
alert(`- La cantidad de autos nuevos registrados fue de ${contNuevos}
- La cantidad de autos usados fue de ${contViejos}
- El precio promedio de los carros es de ${promedio}$`)