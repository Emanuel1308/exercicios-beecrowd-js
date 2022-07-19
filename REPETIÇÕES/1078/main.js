var input = require('fs').readFileSync('./REPETIÇÕES/1078/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N

Entrada
A entrada contém um valor inteiro N (2 < N < 1000).

Saída
Imprima a tabuada de N, conforme o exemplo fornecido.
 */

var A = parseInt(lines)
const tamanho = 10

for (let i = 1; i <= tamanho; i++) {
  console.log(`${i} x ${A} = ${A * i}`)
}
