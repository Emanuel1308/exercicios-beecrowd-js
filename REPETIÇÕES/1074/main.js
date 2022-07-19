var input = require('fs').readFileSync('./REPETIÇÕES/1074/stdin', 'utf8')
var lines = input.split('\r\n')

/**
 * Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.
 */

var vezes = parseInt(lines[0])
var valor = 0

for (let i = 1; i <= vezes; i++) {
  valor = parseInt(lines[i])
  if (valor % 2 === 0) {
    if (valor < 0) {
      console.log('EVEN NEGATIVE')
    } else if (valor > 0) {
      console.log('EVEN POSITIVE')
    } else {
      console.log('NULL')
    }
  } else {
    if (valor < 0) {
      console.log('ODD NEGATIVE')
    } else {
      console.log('ODD POSITIVE')
    }
  }
}
