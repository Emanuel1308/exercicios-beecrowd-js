var input = require('fs').readFileSync('./1047/stdin', 'utf8')
var lines = input.split(' ')

/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

var [hi, mi, hf, mf] = lines.map(item => parseFloat(item))
var h
var m

if (hi < hf) {
  h = hf - hi
  if (mi < mf) {
    m = mf - mi
  }
  if (mi > mf) {
    h = h - 1
    m = 60 - mi + mf
  }
  if (mi == mf) {
    m = 0
  }
}
if (hi > hf) {
  h = 24 - hi + hf
  if (mi < mf) {
    m = mf - mi
  }
  if (mi > mf) {
    h = h - 1
    m = 60 - mi + mf
  }
  if (mi == mf) {
    m = 0
  }
}
if (hi == hf) {
  if (mi < mf) {
    m = mf - mi
    h = 0
  }
  if (mi > mf) {
    m = 60 - mi + mf
    h = 23
  }
  if (mi == mf) {
    h = 24
    m = 0
  }
}

console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`)
