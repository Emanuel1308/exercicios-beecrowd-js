var input = require('fs').readFileSync('./REPETIÇÕES/1151/stdin', 'utf8')
var lines = input.split('\r\n')

/*
A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 46).

Saída
Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.
*/

var N = parseInt(lines)
var sequencia = [0, 1] //A sequencia sempre começa em 0 e 1

for (let i = 2; i < N; i++) {
  //Começa em dois, pois no array já tem dois elementos, o 0 e 1
  sequencia.push(sequencia[i - 1] + sequencia[i - 2])
}
console.log(sequencia.join(' '))
