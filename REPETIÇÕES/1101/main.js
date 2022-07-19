var input = require('fs').readFileSync('./REPETIÇÕES/1101/stdin', 'utf8')
var lines = input.split('\r\n')

/*

Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

Entrada
O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

Saída
Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.
*/
var M = 0
var N = 0
var valores = []
var soma = 0
var sequencia = []

for (let i = 0; i < lines.length; i++) {
  valores = lines[i].split(' ')
  M = parseInt(valores[0])
  N = parseInt(valores[1])
  if (M != 0 && M > 0 && N != 0 && N > 0) {
    if (M > N) {
      for (let i = N; i <= M; i++) {
        sequencia.push(i)
        soma += i
      }
    } else {
      for (let i = M; i <= N; i++) {
        sequencia.push(i)
        soma += i
      }
    }
    console.log(`${sequencia.join(' ')} Sum=${soma}`)
    sequencia = []
    soma = 0
  }
}
