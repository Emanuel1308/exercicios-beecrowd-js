var input = require('fs').readFileSync('./1042/stdin', 'utf8')
var lines = input.split(' ')

/*

Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima A saída conforme foi especificado.

*/

var [A, B, C] = lines.map(item => parseInt(item))
var menor, meio, maior

if (A < B && A < C) {
  menor = A
  if (B < C) {
    meio = B
    maior = C
  } else {
    meio = C
    maior = B
  }
} else if (B < A && B < C) {
  menor = B
  if (A < C) {
    meio = A
    maior = C
  } else {
    meio = C
    maior = A
  }
} else {
  menor = C
  if (A < B) {
    meio = A
    maior = B
  } else {
    meio = B
    maior = A
  }
}
console.log(`${menor}\n${meio}\n${maior}\n`)
console.log(`${A}\n${B}\n${C}`)
