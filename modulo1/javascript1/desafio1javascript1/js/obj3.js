"use strict"

const nom = "Freddy Tomada"
const montoVehic = 3000
var cuotaIni
var cuotasMen

// La cuota inicial es un 30% del precio del vehículo
cuotaIni = 0.3 * montoVehic

// La diferencia debe ser cancelada en cuotas mensuales iguales y
// consecutivas durante 2 años (24 meses)
cuotasMen = (montoVehic - cuotaIni)/24

console.info(`El cliente ${nom} debe pagar por la compra del vehículo de ${montoVehic}$:
Una cuota inicial de: ${cuotaIni}$
Unas cuotas mensuales por 2 años de: ${cuotasMen}$`)




