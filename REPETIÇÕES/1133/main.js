var input = require('fs').readFileSync('./REPETIÇÕES/1133/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.

Entrada
O arquivo de entrada contém 2 valores positivos inteiros quaisquer, não necessariamente em ordem crescente.

Saída
Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente.
*/

var valor1 = parseInt(lines[0])
var valor2 = parseInt(lines[1])

if (valor1 < valor2) {
  for (let i = valor1 + 1; i < valor2; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i)
    }
  }
} else {
  for (let i = valor2 + 1; i < valor1; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i)
    }
  }
}
