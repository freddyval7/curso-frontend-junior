var playera = 25
var deportiva = 50
var casual = 68
var sudadera = 98

const MAX_CANT = 50
const MIN_CANT = 1

var cantFranelas = Math.random()*(MAX_CANT-MIN_CANT) - MIN_CANT
var cantFranelasFixed = cantFranelas.toFixed(0)

// se le pide al usuario el tipo de franela que desea indicándole los precios
var tipoFranela = prompt(`Introduzca el tipo de franela que desea:
- playera: 25$
- deportiva: 50$
- casual: 68$
- sudadera: 98$`)

// Se verifica que el usuario introduzca un tipo de franela válida
if(tipoFranela == "playera" || tipoFranela == "deportiva" || tipoFranela == "casual" || tipoFranela == "sudadera"){
    alert(`Ingresó la franela tipo: ${tipoFranela}`)
    // Se muestra la cantidad aleatoria de franelas
    console.info(`La cantidad de franelas a llevar es de: ${cantFranelasFixed} unidades`)
    // según el tipo de franela, se muestra el precio
    var precio;
    if(tipoFranela == "playera"){
        console.info(`El precio de la franela ${tipoFranela} es de: ${playera}$`)
        precio = playera}
    if(tipoFranela == "deportiva"){
        console.info(`El precio de la franela ${tipoFranela} es de: ${deportiva}$`)
        precio = deportiva}
    if(tipoFranela == "casual"){
        console.info(`El precio de la franela ${tipoFranela} es de: ${casual}$`)
        precio = casual}
    if(tipoFranela == "sudadera"){
        console.info(`El precio de la franela ${tipoFranela} es de: ${sudadera}$`)
        precio = sudadera}

    // Se asigna el descuento según la cantidad de franelas a llevar
    var descuento = 0;
    var porc = 0;
    if(cantFranelasFixed > 24){
        descuento = 0.15
        porc = 15
    }
    if(cantFranelasFixed >= 6 && cantFranelasFixed <= 11){
        descuento = 0.05
        porc = 5
    }

    // Se muestran en consola y en alert las salidas
 
    var subtotal;
    var subtotalDescont;
    var impuesto;
    var montoTotal;

    var salida1 = (`El precio de la franela es: ${precio}$`)

    subtotal = precio*cantFranelasFixed
    var salida2 = (`El subtotal a pagar (precio de la franela * cantidad de unidades) es de: ${subtotal.toFixed(2)}$`)

    var salida3 = (`El descuento a pagar es de un: ${porc}%`)

    subtotalDescont = subtotal - (subtotal*descuento)
    var salida4 = (`El subtotal descontado es: ${subtotalDescont.toFixed(2)}$`)

    impuesto = subtotalDescont*0.12
    var salida5 = (`El impuesto (12%) a pagar es de: ${impuesto.toFixed(2)}$`)

    montoTotal = subtotalDescont + impuesto
    var salida6 = (`El monto total a pagar es de: ${montoTotal.toFixed(2)}$`)

    alert(salida1)
    console.info(salida1)
    alert(salida2)
    console.info(salida2)
    alert(salida3)
    console.info(salida3)
    alert(salida4)
    console.info(salida4)
    alert(salida5)
    console.info(salida5)
    alert(salida6)
    console.info(salida6)   
}else
    alert ("Dió click en cancelar o ingresó un valor invalido (vacío o no existe)")





