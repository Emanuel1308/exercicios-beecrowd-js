var input = require('fs').readFileSync('./1019/stdin', 'utf8')
var lines = input.split('\n')

/*

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

--Entrada
  O arquivo de entrada contém um valor inteiro N.

--Saída
  Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

*/

var tempo = parseInt(lines)

const valores = [3600, 60, 1] //valor de hora, minutos e segundos
const resultado = []

for (let valor of valores) {
  resultado.push(parseInt(tempo / valor)) //Vai dividir o total de segundos por cada valor em valores e jogar dentro do array de resultado
  tempo = tempo % valor //Reatribuit os valores
}

console.log(resultado.join(':'))
