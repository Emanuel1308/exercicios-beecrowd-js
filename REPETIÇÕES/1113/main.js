var input = require('fs').readFileSync('./REPETIÇÕES/1113/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

Entrada
A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

Saída
Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.
*/

var X = 0
var Y = 0
var valores = []

for (let i = 0; i < lines.length; i++) {
  valores = lines[i].split(' ')
  X = parseInt(valores[0])
  Y = parseInt(valores[1])
  if (X !== Y) {
    if (Y > X) {
      console.log('Crescente')
    }
    if (X > Y) {
      console.log('Decrescente')
    }
  }
}
