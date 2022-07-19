var input = require('fs').readFileSync('./1051/stdin', 'utf8')
var lines = input.split('\n')

/*

Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.

Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.



Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".

*/

/**
 * 1 - Quebrar o salario
 *    -Se o salario for 4750
 *      -2000 é isetno
 *      -1000 é 8%
 *      -1500 é 18%
 *      -E a diferença que vai ser de 250, é 28%
 *  Ou sejá, vai pegar o valor total da renda, e quebrar ele de acordo com o limite de imposto
 *    Se o salario for 9000
 *      -2000 é isetno
 *      -1000 é 8%
 *      -1500 é 18%
 *      -E a diferença salario - 2000 - 1000 - 1500 que vai ser de 4500, é 28%
 */

var salario = parseFloat(lines)
var imposto = 0
var diferenca = 0
const impostoRenda1 = 8
const impostoRenda2 = 18
const impostoRenda3 = 28

if (salario > 4500.0) {
  //2000 - isento
  //1000 - 8%
  //1500 - 18%
  //Diferença 28%
  imposto = 1000 * (impostoRenda1 / 100) + 1500 * (impostoRenda2 / 100) //2000 não entra pois é isento
  diferenca = salario - 4500 //Calcular a diferena dos impostos - o salario
  imposto = imposto + diferenca * (impostoRenda3 / 100) //soma o imposto que já tem com o imposto da diferença
} else if (salario > 3000.0) {
  //2000 - isento
  //1000 - 8%
  //Como se fizer com o imposto de 1500 passara do valor total, já passa para a diferença
  //diferença - 18%
  imposto = 1000 * (impostoRenda1 / 100) //2000 não entra pois é isento
  diferenca = salario - 3000 //Calcular a diferena dos impostos - o salario
  imposto = imposto + diferenca * (impostoRenda2 / 100) //soma o imposto que já tem com o imposto da diferença
} else if (salario > 2000.0) {
  //2000 - isento
  //diferença - 8%
  diferenca = salario - 2000
  imposto = diferenca * (impostoRenda1 / 100)
}

if (imposto > 0) {
  console.log(`R$ ${imposto.toFixed(2)}`)
} else {
  console.log('Isento')
}
