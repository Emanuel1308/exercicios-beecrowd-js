var input = require('fs').readFileSync('./REPETIÇÕES/1115/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

Entrada
A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.

*/

var valores = []
var x = 0
var y = 0

for (let i = 0; i < lines.length; i++) {
  valores = lines[i].split(' ')
  x = parseInt(valores[0])
  y = parseInt(valores[1])
  if (x === 0 || y === 0) {
    return
  } else {
    if (x > 0 && y > 0) {
      console.log('primeiro')
    } else if (x < 0 && y > 0) {
      console.log('segundo')
    } else if (x < 0 && y < 0) {
      console.log('terceiro')
    } else if (x > 0 && y < 0) {
      console.log('quarto')
    }
  }
}
