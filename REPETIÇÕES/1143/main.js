var input = require('fs').readFileSync('./REPETIÇÕES/1143/stdin', 'utf8')
var lines = input.split('\r\n')

/**
Escreva um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Entrada
O arquivo de entrada contém um número inteiro positivo N.

Saída
Imprima a saída conforme o exemplo fornecido.
 */

var vezes = parseInt(lines)
var valores = []

for (let i = 1; i <= vezes; i++) {
  valores.push(i, Math.pow(i, 2), Math.pow(i, 3))
  console.log(valores.join(' '))
  valores = []
}
