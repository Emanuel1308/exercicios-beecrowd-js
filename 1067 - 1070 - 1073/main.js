var input = require('fs').readFileSync('./1067 - 1070 - 1073/stdin', 'utf8')
var lines = input.split('\r\n')

//1067
/*var A = parseInt(lines)

Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.

for (let i = 1; i <= A; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}
*/

//1070
/**
 Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

var B = parseInt(lines)

if (B % 2 === 0) {
  B = B + 1
} else {
  B = B
}

console.log(B)
for (let i = 1; i <= 5; i++) {
  console.log((B += 2))
}

*/

//1073
/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.
*/

var C = parseInt(lines)

for (let i = 1; i <= C; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`)
  }
}
