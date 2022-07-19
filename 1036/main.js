var input = require('fs').readFileSync('./1036/stdin', 'utf8')
var [A, B, C] = input.split(' ').map(element => parseFloat(element))

/*

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

--Entrada
  Leia três valores de ponto flutuante (double) A, B e C.

--Saída
  Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

*/

var delta = Math.pow(B, 2) - 4 * A * C

if (delta < 0 || A === 0) {
  console.log('Impossivel calcular')
} else {
  let R1 = ((-Math.abs(B) + Math.sqrt(delta)) / (2 * A)).toFixed(5)
  let R2 = ((-Math.abs(B) - Math.sqrt(delta)) / (2 * A)).toFixed(5)
  console.log(`R1 = ${R1}`)
  console.log(`R2 = ${R2}`)
}
