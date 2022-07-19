var input = require('fs').readFileSync('./1064/stdin', 'utf8')
var lines = input.split('\r\n')

/*

Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

*/

var valores = 0
var positivos = 0
var soma = 0
var media = 0

for (let i = 0; i < lines.length; i++) {
  valores = parseFloat(lines[i])
  if (valores > 0) {
    positivos++
    soma += valores
  }
  media = soma / positivos
}

console.log(`${positivos} valores positivos`)
console.log(media.toFixed(1))
