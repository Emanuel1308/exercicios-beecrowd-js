var input = require('fs').readFileSync('./REPETIÇÕES/1094/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
*/

var vezes = parseInt(lines[0])
var qtd = 0
var tipo = 0
var coelhos = 0
var ratos = 0
var sapos = 0
var total = 0
var percentualCoelhos = 0
var percentualSapos = 0
var percentualRatos = 0

for (let i = 1; i <= vezes; i++) {
  let qtdTipo = lines[i].split(' ')
  qtd = parseInt(qtdTipo[0])
  tipo = qtdTipo[1]

  if (tipo === 'C') {
    coelhos = coelhos + qtd
    total = total + qtd
  } else if (tipo === 'R') {
    ratos = ratos + qtd
    total = total + qtd
  } else if (tipo === 'S') {
    sapos = sapos + qtd
    total = total + qtd
  }
}
percentualCoelhos = (100 * coelhos) / total
percentualSapos = (100 * sapos) / total
percentualRatos = (100 * ratos) / total

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`)
