var input = require('fs').readFileSync('./REPETIÇÕES/1132/stdin', 'utf8')
var lines = input.split('\r\n')

/*

Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.

Entrada
O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

Saída
Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.

*/

var valor1 = parseInt(lines[0])
var valor2 = parseInt(lines[1])
var soma = 0

if (valor1 < valor2) {
  for (let i = valor1; i <= valor2; i++) {
    if (i % 13 !== 0) {
      soma += i
    }
  }
} else {
  for (let i = valor2; i <= valor1; i++) {
    if (i % 13 !== 0) {
      soma += i
    }
  }
}
console.log(soma)
