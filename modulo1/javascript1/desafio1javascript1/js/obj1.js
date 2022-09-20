"use strict"

const nombre = "Freddy Tomada"
const numAutosVend = 3
const valorTotalVentas = 2000
const salarioBase = 500

// Comisión de 20$ por cada auto vendido
const comisionXVenta = 20 * numAutosVend

// 10% del valor total de las ventas
const comisionTotal = 0.1 * valorTotalVentas

var salarioNeto 

salarioNeto = salarioBase + comisionXVenta + comisionTotal

console.info(`El salario neto del empleado ${nombre} es ${salarioNeto}`)
