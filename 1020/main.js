var input = require('fs').readFileSync('./1020/stdin', 'utf8')
var lines = input.split('\n')

/*

Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

*/

var dias = parseInt(lines)

var qtdAnos = parseInt(dias / 365)
dias = dias % 365

var qtdMeses = parseInt(dias / 30)
dias = dias % 30

var qtdDias = parseInt(dias)

console.log(`${qtdAnos} ano(s)`)
console.log(`${qtdMeses} mes(es)`)
console.log(`${qtdDias} dia(s)`)
