var input = require('fs').readFileSync('./REPETIÇÕES/1157/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 Ler um número inteiro N e calcular todos os seus divisores.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Escreva todos os divisores positivos de N, um valor por linha.
 */

var N = parseInt(lines)

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    console.log(i)
  }
}
