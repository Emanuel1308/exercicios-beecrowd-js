var input = require('fs').readFileSync('./ARRAYS/1175/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Faça um programa que leia um vetor N[20]. Troque a seguir, o primeiro elemento com o último, o segundo elemento com o penúltimo, etc., até trocar o 10º com o 11º. Mostre o vetor modificado.

Entrada
A entrada contém 20 valores inteiros, positivos ou negativos.

Saída
Para cada posição do vetor N, escreva "N[i] = Y", onde i é a posição do vetor e Y é o valor armazenado naquela posição.
*/

var X = new Array(20)

for (let i = 0; i < lines.length; i++) {
  X[i] = parseFloat(lines[i])
}
X.reverse()
for (let i = 0; i < X.length; i++) {
  console.log(`N[${i}] = ${X[i]}`)
}
