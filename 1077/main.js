var input = require('fs').readFileSync('./1077/stdin', 'utf8')
var lines = input.split('\r\n')

/*
O Professor solicitou que você escreva um programa que converta uma expressão na forma infixa (como usualmente conhecemos) para uma expressão na forma posfixa. Como você sabe, os termos in (no meio) e pos (depois) se referem à posição dos operadores. O programa terá que lidar somente com operadores binários +,-,*,/,^, parênteses, letras e números. Um exemplo seria uma expressão como:
(A*B+2*C^3)/2*A. O programa deve converter esta expressão (infixa) para a expressão posfixa: AB*2C3^*+2/A*
 

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 1000), que indica o número de casos de teste. Cada caso de teste a seguir é uma expressão válida na forma infixa, com até 300 caracteres.

Saída
Para cada caso, apresente a expressão convertida para a forma posfixa.
*/

var vezes = parseInt(lines[0])
var expressaoInfixa = []
var pilha = []
var expressaoPosfixa = []
var K = 0
let nome = ''

for (let i = 1; i <= vezes; i++) {
  expressaoInfixa = lines[i]
  while (K < expressaoInfixa.length) {
    if (expressaoInfixa[K] == '(') {
    } else if (
      expressaoInfixa[K] == '*' ||
      expressaoInfixa[K] == '+' ||
      expressaoInfixa[K] == '-' ||
      expressaoInfixa[K] == '/'
    ) {
      pilha.push(expressaoInfixa[K])
      console.log(pilha)
    } else if (
      !(
        expressaoInfixa[K] == '*' ||
        expressaoInfixa[K] == '+' ||
        expressaoInfixa[K] == '-' ||
        expressaoInfixa[K] == '/'
      )
    ) {
      expressaoPosfixa.push(expressaoInfixa[K])
    } else if (expressaoInfixa[K] == ')') {
      if (pilha.length > 0) {
        nome = pilha.pop()
        expressaoPosfixa.push(nome)
      }
    }
    K++
  }
  console.log(expressaoPosfixa)
}
