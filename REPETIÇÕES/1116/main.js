var input = require('fs').readFileSync('./REPETIÇÕES/1116/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

Entrada
A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.

*/

var vezes = parseInt(lines[0])
var valores = []
var divisao = 0
var X = 0
var Y = 0
for (let i = 1; i <= vezes; i++) {
  valores = lines[i].split(' ')
  X = parseInt(valores[0])
  Y = parseInt(valores[1])

  if (Y !== 0) {
    divisao = X / Y
    console.log(divisao.toFixed(1))
  } else {
    console.log('divisao impossivel')
  }
}
