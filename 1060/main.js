var input = require('fs').readFileSync('./1060/stdin', 'utf8')
var lines = input.split('\n')

/*

Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.

 */

var valor
var numeroPositivo = 0
for (let i = 0; i < lines.length; i++) {
  valor = lines[i]
  if (valor > 0) {
    numeroPositivo++
  }
}

console.log(`${numeroPositivo} valores positivos`)
