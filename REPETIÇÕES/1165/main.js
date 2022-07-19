var input = require('fs').readFileSync('./REPETIÇÕES/1165/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Na matemática, um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo. Por exemplo, o número 7 é primo, pois pode ser dividido apenas pelo número 1 e pelo número 7.

Entrada
A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 100), indicando o número de casos de teste da entrada. Cada uma das N linhas seguintes contém um valor inteiro X (1 < X ≤ 107), que pode ser ou não, um número primo.

Saída
Para cada caso de teste de entrada, imprima a mensagem “X eh primo” ou “X nao eh primo”, de acordo com a especificação fornecida.
*/

var vezes = parseInt(lines[0])
var N
var soma = 0

for (let i = 1; i <= vezes; i++) {
  N = parseInt(lines[i])

  for (let j = 1; j <= N; j++) {
    if (N % j === 0) {
      soma += j
    }
  }

  if (soma - 1 === N) {
    //Se ele for primo sempre será somado 1 com o numero, ou seja, 7 - 1+7 = 8, por isso usa o -1, que fica 7 === 7
    console.log(`${N} eh primo`)
  } else {
    console.log(`${N} nao eh primo`)
  }
  soma = 0
}
