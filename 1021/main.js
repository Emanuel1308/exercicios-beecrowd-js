var input = require('fs').readFileSync('./1021/stdin', 'utf8')
var lines = input.split('\n')

let valor = parseFloat(lines)
const notas = [100, 50, 20, 10, 5, 2]
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01]

console.log('NOTAS:')
for (let nota of notas) {
  let totalNotas = parseInt(valor / nota)
  console.log(`${totalNotas} nota(s) de R$ ${nota}.00`)
  valor = valor % nota
  //Vai percorrer o array de notas, dividindo a nota pelo valor, e reatribuindo a variávl valor o resto da divisão pela nota, ou seja, valor vai ganhar o resto da divisão, e o resultado da divisão vai ser a quantidade de notas.
}

console.log('MOEDAS:')
for (let moeda of moedas) {
  moeda = moeda.toFixed(2)
  let totalMoedas = parseInt(valor / moeda)
  console.log(`${totalMoedas} moeda(s) de R$ ${moeda}`)
  valor = (valor % moeda) + 0.00001 //Para arredondar
  ////Vai percorrer o array de moedas, dividindo a moeda pelo valor, e reatribuindo a variávl valor o resto da divisão pela moeda, ou seja, valor vai ganhar o resto da divisão, e o resultado da divisão vai ser a quantidade de moedas.
}
