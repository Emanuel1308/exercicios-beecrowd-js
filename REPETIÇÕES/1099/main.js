var input = require('fs').readFileSync('./REPETIÇÕES/1099/stdin', 'utf8')
var lines = input.split('\r\n')

/*

Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.

*/

var vezes = parseInt(lines[0])

for (let i = 1; i <= vezes; i++) {
  let valores = lines[i].split(' ')
  let X = parseInt(valores[0])
  let Y = parseInt(valores[1])
  let somaImpar = 0

  if (X < Y) {
    for (let j = X + 1; j < Y; j++) {
      if (j % 2 !== 0) {
        somaImpar += j
      }
    }
  }
  if (X > Y) {
    for (let j = Y + 1; j < X; j++) {
      if (j % 2 !== 0) {
        somaImpar += j
      }
    }
  }
  if (X === Y) {
    somaImpar = 0
  }
  console.log(somaImpar)
  somaImpar = 0 //Zera a variavel para começar novamente a soma
}
