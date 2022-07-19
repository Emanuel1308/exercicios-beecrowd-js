var input = require('fs').readFileSync('./1009/stdin', 'utf8')
var lines = input.split('\n')

/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

*/

var name = lines[0]
var salarioFixo = parseFloat(lines[1])
var totalVendas = parseFloat(lines[2])
var comissao = (totalVendas / 100) * 15
var salario = comissao + salarioFixo
var salarioTotal = salario.toFixed(2)

console.log(`TOTAL = R$ ${salarioTotal}`)
