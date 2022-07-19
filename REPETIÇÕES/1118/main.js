var input = require('fs').readFileSync('./REPETIÇÕES/1118/stdin', 'utf8')
var lines = input.split('\r\n')

/*
screva um programa para ler as notas da primeira e a segunda avaliação de um aluno. Calcule e imprima a média semestral. O programa só deverá aceitar notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

No final deve ser impressa a mensagem “novo calculo (1-sim 2-nao)”, solicitando ao usuário que informe um código (1 ou 2) indicando se ele deseja ou não executar o algoritmo novamente, (aceitar apenas os código 1 ou 2). Se for informado o código 1 deve ser repetida a execução de todo o programa para permitir um novo cálculo, caso contrário o programa deve ser encerrado.

Entrada
O arquivo de entrada contém vários valores reais, positivos ou negativos. Quando forem lidas duas notas válidas, deve ser lido um valor inteiro X . O programa deve parar quando o valor lido para este X for igual a 2.

Saída
Se uma nota inválida for lida, deve ser impressa a mensagem “nota invalida”. Quando duas notas válidas forem lidas, deve ser impressa a mensagem “media = ” seguido do valor do cálculo.

Antes da leitura de X deve ser impressa a mensagem "novo calculo (1-sim 2-nao)" e esta mensagem deve ser apresentada novamente se o valor da entrada padrão para X for menor do que 1 ou maior do que 2, conforme o exemplo abaixo.

A média deve ser impressa com dois dígitos após o ponto decimal.
*/

var nota = 0
var soma = 0
var media = 0
var cont = 0
var escolha = 0
var i = 0

do {
  nota = parseFloat(lines[i])
  if (nota >= 0 && nota <= 10) {
    soma += nota
    cont++
    if (cont === 2) {
      media = soma / cont
      console.log(`media = ${media.toFixed(2)}`)
    }
  } else {
    console.log('nota invalida')
  }
  var j = parseInt(lines.indexOf(nota) + 1)

  console.log('novo calculo (1-sim 2-nao)')
  escolha = parseInt(lines[j])

  i++
  j++
} while (escolha != 2)
