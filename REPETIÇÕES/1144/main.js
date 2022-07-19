var input = require('fs').readFileSync('./REPETIÇÕES/1144/stdin', 'utf8')
var lines = input.split('\r\n')

/**
Escreva um programa que leia um valor inteiro N. N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo. Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.

Entrada
O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).

Saída
Imprima a saída conforme o exemplo fornecido.
 */

var A, B, C, D
var valores = []
var vezes = parseInt(lines)
for (let i = 1; i <= vezes; i++) {
  A = Math.pow(i, 2)
  B = Math.pow(i, 3)
  valores.push(i, A, B)
  console.log(valores.join(' '))
  valores = []
  //Sedunda linha
  C = A + 1 //Pega o valor de A e soma um
  D = B + 1
  valores.push(i, C, D)
  console.log(valores.join(' '))
  valores = []
}

//Sempre vai aparecer duas linhas para um valor de i, uma linha é o i, o i ao quadrado, e o i ao cubo, e a outra linha sempre é mostrado o i, a soma de 1 com o i ao quadrado anterior, e a soma de um com o i ao cubo anterior.
