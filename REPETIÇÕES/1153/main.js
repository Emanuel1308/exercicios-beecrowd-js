var input = require('fs').readFileSync('./REPETIÇÕES/1153/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

Entrada
A entrada contém um valor inteiro N (0 < N < 13).

Saída
A saída contém um valor inteiro, correspondente ao fatorial de N.
*/

var N = parseInt(lines)
var fatorial = 1//Começa em um se começar em 0 dá 0

for (let i = N; i >= 1; i--) {
  fatorial *= i //4*3*2*1
}
console.log(fatorial)
