"use strict"

// Resultados de los tres exámenes parciales de 27 pts c/u
const examen1 = 20
const examen2 = 25
const examen3 = 18

// Resultado de la evaluación continua de 9 pts
const evalContinua = 9

// Resultado del trabajo práctico de 10 pts
const trabajoPractico = 8

// Nota final sobre 100, 20 y 4 
var notaFinal100 
var notaFinal20
var notaFinal4

notaFinal100 = examen1 + examen2 + examen3 + evalContinua + trabajoPractico

notaFinal20 = notaFinal100 * 0.2

notaFinal4 = notaFinal100 * 0.04

console.info(`La nota final del estudiante es:
sobre 100 pts: ${notaFinal100} pts
sobre 20 pts: ${notaFinal20} pts
sobre 4 pts: ${notaFinal4} pts`)
