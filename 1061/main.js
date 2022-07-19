var input = require('fs').readFileSync('./1061/stdin', 'utf8')
var lines = input.split('\r\n')

/*

Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.

*/

var inicioDias = lines[0].split(' ')
var ininioHoras = lines[1].split(' ')
var fimDias = lines[2].split(' ')
var fimHoras = lines[3].split(' ')

var dia = parseInt(inicioDias[1])
var horaInicial = parseInt(ininioHoras[0])
var minutoInicial = parseInt(ininioHoras[2])
var segundoInicial = parseInt(ininioHoras[4])

var fimDia = parseInt(fimDias[1])
var horaFinal = parseInt(fimHoras[0])
var minutoFinal = parseInt(fimHoras[2])
var segundofinal = parseInt(fimHoras[4])

var totalDias = fimDia - dia
var totalHora = horaFinal - horaInicial
var totalMinuto = minutoFinal - minutoInicial
var totaSegundos = segundofinal - segundoInicial

if (totaSegundos < 0) {
  totaSegundos += 60
  totalMinuto--
}
if (totalMinuto < 0) {
  totalMinuto += 60
  totalHora--
}
if (totalHora < 0) {
  totalHora += 24
  totalDias--
}

console.log(`${totalDias} dia(s)`)
console.log(`${totalHora} hora(s)`)
console.log(`${totalMinuto} minuto(s)`)
console.log(`${totaSegundos} segundo(s)`)
