var input = require('fs').readFileSync('./1046/stdin', 'utf8')
var [A, B] = input.split(' ').map(item => parseFloat(item))

/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/

var tempo = 0
if (A >= B) {
  tempo = 24 - A + B
  console.log(`O JOGO DUROU ${tempo} HORA(S)`)
} else {
  tempo = B - A
  console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}
