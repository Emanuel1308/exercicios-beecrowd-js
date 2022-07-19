var input = require('fs').readFileSync('./REPETIÇÕES/1145/stdin', 'utf8')
var lines = input.split(' ')

/**
Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.

Entrada
O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).

Saída
Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.
 */

let colunas = parseInt(lines.shift())
let max = parseInt(lines.shift())

let contador = 0
let str = ''
for (let i = 1; i < max; i++) {
  contador += 1
  if (contador == colunas) {
    contador = 0
    str += `${i}\n` //Quando o contador for igual a colunas, quer dizer que ja vai ter 3 linhas, e o valor que ele colocar será com uma quebra de linha para o a proxima linha
  } else {
    str += `${i} ` //Se o contador nao for 3, ele vai apresentar os valores apenas com espaços.
  }
}
str += `${max}` //Como o i começa em um, e ele vai até ser menor que o maximo, no final ele tem que receber esse ultimo valor, já que ele não vai entrar, e também é colocado por ultimo para não receber espaçamentos depois dele
console.log(str)
