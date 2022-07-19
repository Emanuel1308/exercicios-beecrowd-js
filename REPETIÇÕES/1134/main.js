var input = require('fs').readFileSync('./REPETIÇÕES/1134/stdin', 'utf8')
var lines = input.split('\r\n')

/**
Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.
Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.
 */

var codigo = 0
var alcool = 0
var gasolina = 0
var diesel = 0
const fim = 4

for (let i = 0; i < lines.length; i++) {
  codigo = parseInt(lines[i])
  if (codigo === 1) {
    alcool++
  } else if (codigo === 2) {
    gasolina++
  } else if (codigo === 3) {
    diesel++
  } else if (codigo === fim) {
    console.log('MUITO OBRIGADO')
    console.log(`Alcool: ${alcool}`)
    console.log(`Gasolina: ${gasolina}`)
    console.log(`Diesel: ${diesel}`)
    return
  }
}
