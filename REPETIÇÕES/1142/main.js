var input = require('fs').readFileSync('./REPETIÇÕES/1142/stdin', 'utf8')
var lines = input.split('\r\n')

/**
Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Entrada
O arquivo de entrada contém um número inteiro positivo N.

Saída
Imprima a saída conforme o exemplo fornecido.
 */

var vezes = parseInt(lines)
var quantidade = 4
var valores = []

for (let i = 1; i < vezes * quantidade; i += 4) {
  valores.push(i, i + 1, i + 2, 'PUM')
  console.log(valores.join(' '))
  valores = []
}
// valores vai receber 1,2,3,pum, e na proxima rodada i será 5, então ele recebe 5,6,7, pum
