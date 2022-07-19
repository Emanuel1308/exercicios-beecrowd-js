var input = require('fs').readFileSync('./1017/stdin', 'utf8')
var lines = input.split('\n')

/*
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. 
--Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). 
--Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

--Entrada
  O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).
  
--Saída
  Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

*/

var tempo = parseInt(lines[0])
var velocidade = parseInt(lines[1])

const kmL = 12

function quantidadeLitros(tempo, velocidade) {
  let distanciaPecorrida = tempo * velocidade

  let totalLitros = distanciaPecorrida / kmL

  return totalLitros.toFixed(3)
}

console.log(quantidadeLitros(tempo, velocidade))
