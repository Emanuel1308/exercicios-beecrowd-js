var input = require('fs').readFileSync('./1048/stdin', 'utf8')
var lines = input.split('\n')

/*
var input = require('fs').readFileSync('./1047/stdin', 'utf8')
var lines = input.split(' ')

/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

var salario = parseFloat(lines)

var novoSalario = 0
var reajuseGanho = 0
var reajuste = 0

if (salario >= 0 && salario <= 400.0) {
  reajuste = 15
  novoSalario = salario + (salario / 100) * reajuste
  reajuseGanho = novoSalario - salario
} else if (salario >= 400.01 && salario <= 800.0) {
  reajuste = 12
  novoSalario = salario + (salario / 100) * reajuste
  reajuseGanho = novoSalario - salario
} else if (salario >= 800.01 && salario <= 1200.0) {
  reajuste = 10
  novoSalario = salario + (salario / 100) * reajuste
  reajuseGanho = novoSalario - salario
} else if (salario >= 1200.01 && salario <= 2000.0) {
  reajuste = 7
  novoSalario = salario + (salario / 100) * reajuste
  reajuseGanho = novoSalario - salario
} else {
  reajuste = 4
  novoSalario = salario + (salario / 100) * reajuste
  reajuseGanho = novoSalario - salario
}

console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuseGanho.toFixed(2)}`)
console.log(`Em percentual: ${reajuste} %`)
