var input = require('fs').readFileSync('./REPETIÇÕES/1114/stdin', 'utf8')
var lines = input.split('\r\n')

/*
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 

Entrada
A entrada é composta por vários casos de testes contendo valores inteiros.

Saída
Para cada valor lido mostre a mensagem correspondente à descrição do problema.
*/

var senha = 0
const senhaCorreta = 2002

for (let i = 0; i < lines.length; i++) {
  senha = parseInt(lines[i])
  if (senha === senhaCorreta) {
    console.log('Acesso Permitido')
    return
  } else {
    console.log('Senha Invalida')
  }
}
