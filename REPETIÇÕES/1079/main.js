var input = require('fs').readFileSync('./REPETIÇÕES/1079/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
 */

var A = parseInt(lines[0])
var nota1 = 0
var nota2 = 0
var nota3 = 0
var media = 0

for (let i = 1; i <= A; i++) {
  ;[nota1, nota2, nota3] = lines[i].split(' ')
  media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5)
  console.log(media.toFixed(1))
}
