var input = require('fs').readFileSync('./ARRAYS/1172/stdin', 'utf8')
var lines = input.split('\r\n').map(element => parseInt(element))

/*
Faça um programa que leia um vetor X[10]. Substitua a seguir, todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.

Entrada
A entrada contém 10 valores inteiros, podendo ser positivos ou negativos.

Saída
Para cada posição do vetor, escreva "X[i] = x", onde i é a posição do vetor e x é o valor armazenado naquela posição.
*/

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === 0 || lines[i] < 0) {
    lines[i] = 1
  }
  console.log(`X[${i}] = ${lines[i]}`)
}
