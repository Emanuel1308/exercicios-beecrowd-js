var input = require('fs').readFileSync('./REPETIÇÕES/1080/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
 */

var valores = 0
var maior = 0
var posicao = 0

for (let index = 0; index < lines.length; index++) {
  valores = parseInt(lines[index])
  if (valores > maior) {
    maior = valores
    posicao = index + 1
  }
}
console.log(maior)
console.log(posicao)
