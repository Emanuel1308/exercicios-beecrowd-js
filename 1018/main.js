var input = require('fs').readFileSync('./1018/stdin', 'utf8')
var lines = input.split('\n')

let valor = parseInt(lines)
const notas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor)
for (let nota of notas) {
  let totalNotas = parseInt(valor / nota)
  console.log(`${totalNotas} nota(s) de R$ ${nota},00`)
  valor = valor % nota
}
