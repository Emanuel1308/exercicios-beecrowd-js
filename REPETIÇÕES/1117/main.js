var input = require('fs').readFileSync('./REPETIÇÕES/1117/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

Entrada
A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.

Saída
Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.
*/

var nota = 0
var soma = 0
var media = 0
var cont = 0

for (let i = 0; i < lines.length; i++) {
  nota = parseFloat(lines[i])
  if (nota >= 0 && nota <= 10) {
    soma += nota
    cont++
  } else {
    console.log('nota invalida')
  }
  if (cont === 2) {
    media = soma / cont
    console.log(`media = ${media.toFixed(2)}`)
    return
  }
}
