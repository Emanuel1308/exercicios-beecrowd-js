var input = require('fs').readFileSync('./REPETIÇÕES/1075/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 * Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
 */

var A = parseInt(lines)

for (let i = 1; i <= 10000; i++) {
  if (i % A === 2) {
    console.log(i)
  }
}
