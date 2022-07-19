var input = require('fs').readFileSync('./REPETIÇÕES/1154/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.

Entrada
A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.

Saída
A saída contém um valor correspondente à média de idade dos indivíduos.

A média deve ser impressa com dois dígitos após o ponto decimal.
 */

var soma = 0
var count = 0
var media = 0
var idade = 0

for (let i = 0; i < lines.length; i++) {
  idade = parseInt(lines[i])
  if (idade > 0) {
    soma += idade
    count++
    media = soma / count
  } else {
    console.log(media.toFixed(2))
    return
  }
}
