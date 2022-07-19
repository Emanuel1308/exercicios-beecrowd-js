var input = require('fs').readFileSync('./1013/stdin', 'utf8')
var lines = input.split(' ')

/*

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

(A+B + abs(A-b))/2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

*/

var A = parseInt(lines[0])
var B = parseInt(lines[1])
var C = parseInt(lines[2])

var maiorAB = (A + B + Math.abs(A - B)) / 2
var maiorValor = (C + maiorAB + Math.abs(C - maiorAB)) / 2
console.log(`${maiorValor} eh o maior`)
