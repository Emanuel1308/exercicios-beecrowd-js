var input = require('fs').readFileSync('./1072/stdin', 'utf8')
var lines = input.split('\n')

/*
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/

var vezes = parseInt(lines[0])
var valores = 0
var dentro = 0
var fora = 0

for (let i = 1; i <= vezes; i++) {
  valores = parseInt(lines[i])
  if (valores >= 10 && valores <= 20) {
    dentro++
  } else {
    fora++
  }
}
console.log(`${dentro} in`)
console.log(`${fora} out`)
