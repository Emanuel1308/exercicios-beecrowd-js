var input = require('fs').readFileSync('./1045/stdin', 'utf8')
var lines = input.split(' ')

/*

Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, 
de modo que o lado A representa o maior dos 3 lados. 
A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente A mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente A mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/

var [A, B, C] = lines.sort((b, a) => a - b).map(item => parseFloat(item))
//Organizei o array do maior pro menor, sendo assim o primeiro valor sempre será o maior, atribuindo ele a variável A

if (A >= B + C) {
  console.log('NAO FORMA TRIANGULO')
} else {
  if (Math.pow(A, 2) == Math.pow(B, 2) + Math.pow(C, 2)) {
    console.log('TRIANGULO RETANGULO')
  } else if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
    console.log('TRIANGULO OBTUSANGULO')
  } else {
    console.log('TRIANGULO ACUTANGULO')
  }

  if (A == B && B == C) {
    console.log('TRIANGULO EQUILATERO')
  }

  if ((A == B && A != C) || (B == C && B != A) || (C == A && C != B)) {
    console.log('TRIANGULO ISOSCELES')
  }
}
