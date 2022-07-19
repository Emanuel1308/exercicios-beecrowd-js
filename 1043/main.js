var input = require('fs').readFileSync('./1043/stdin', 'utf8')
var lines = input.split(' ')

/*

Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
*/

var [A, B, C] = lines.map(item => parseFloat(item))
var triangle = shapeTriangle(A, B, C)

//Verifica se forma ou não um triangulo
function shapeTriangle(A, B, C) {
  let formaTriangulo
  if (A < B + C && B < A + C && C < B + A) {
    formaTriangulo = true
    return formaTriangulo
  } else {
    formaTriangulo = false
    return formaTriangulo
  }
}

//Calcula o perimetro se forma o triangulo e a area se não forma.
function checkTringule(A, B, C, triangle) {
  if (triangle) {
    let perimeter = A + B + C
    return `Perimetro = ${perimeter.toFixed(1)}`
  } else {
    let area = ((A + B) * C) / 2
    return `Area = ${area.toFixed(1)}`
  }
}

console.log(checkTringule(A, B, C, triangle))
