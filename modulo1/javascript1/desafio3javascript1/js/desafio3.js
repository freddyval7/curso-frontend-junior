
var arrNombres = ["Aruba","México","Miami","Londres","Suiza"]
var arrPrecios = [250,4570,500,1400,2200]
var numClientes = 0;
var acumTotal = 0;
var n = 0;

do{
    // se le pide la cédula al usuario
    do{
        var cedula = prompt(`Introduzca la cedula del cliente ${n+1}`)
        if(cedula == null || cedula.trim() == "" || isNaN(cedula))
         alert("Debe ingresar una cedula correcta (presionó cancelar, lo dejó vacío o no ingresó números)")
        
    }while(cedula == null || cedula.trim() == "" || isNaN(cedula))
    cedula = parseInt(cedula)
    
    // se pide la ciudad, el usuario debe ingresar un NUMERO entre 1 y 5
    do{
        var ciudad = prompt(`Introduzca la ciudad destino: 
        1. Aruba (250$)
        2. México (4570$)
        3. Miami (500$)
        4. Londres (1400$)
        5. Suiza (2200$)`)
        if(ciudad == null || ciudad.trim() == "" || isNaN(ciudad))
            alert("Debe ingresar un número correcto (presionó cancelar, lo dejó vacío o no ingresó números)")
        else if(ciudad < 1 || ciudad > 5)
            alert("Debe ingresar un número entre 1 y 5")
    }while(ciudad == null || ciudad.trim() == "" || isNaN(ciudad) || (ciudad < 1 || ciudad > 5))
    
    // se calcula el precio base según la ciudad escogida
    var precioBase = 0;
    var desc = 0;
    var impuesto = 0;
    var montoTotal = 0;

    // si la cédula es par obtiene un impuesto de 15$, sino, de 30$
    if (cedula%2 == 0)
        impuesto = 15
    else
        impuesto = 30
    // si la ciudad es la opcion 4 o 5 obtiene un desc de 10%
    if(ciudad == 4 || ciudad == 5)
        desc = 0.10
        var porc = 10
    
    if (ciudad == 1 || ciudad == 2 || ciudad == 3){
        alert(`El precio del vuelo hacia ${arrNombres[ciudad-1]} es de: ${arrPrecios[ciudad-1]}$
        No obtiene descuento
        Un impuesto de: ${impuesto}$`)
        montoTotal = arrPrecios[ciudad-1] + impuesto
        alert(`Teniendo un monto total de: ${montoTotal}$`)
    } else if (ciudad == 4 || ciudad == 5){
        alert(`El precio del vuelo hacia ${arrNombres[ciudad-1]} es de: ${arrPrecios[ciudad-1]}$
        Un descuento de: ${porc}%
        Un impuesto de: ${impuesto}$`)
        montoTotal = (arrPrecios[ciudad-1]-(arrPrecios[ciudad-1]*desc)) + impuesto
        alert(`Teniendo un monto total de: ${montoTotal}$`)
    }  
    numClientes++
    acumTotal+=montoTotal
}while (confirm("Desea registrar otro cliente?"))

var promIngresos = acumTotal/numClientes
alert(`La cantidad de pasajeros registrada fue de ${numClientes} pasajeros
El total de ingresos de la agencia fue de: ${acumTotal}$
El promedio de ingreso fue de ${promIngresos.toFixed(2)}$`)