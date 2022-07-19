var input = require('fs').readFileSync('./STRINGS/1168/stdin', 'utf8')
var lines = input.split('\r\n')

/*
João quer montar um painel de leds contendo diversos números. Ele não possui muitos leds, e não tem certeza se conseguirá montar o número desejado. Considerando a configuração dos leds dos números abaixo, faça um algoritmo que ajude João a descobrir a quantidade de leds necessário para montar o valor.




Entrada
A entrada contém um inteiro N, (1 ≤ N ≤ 1000) correspondente ao número de casos de teste, seguido de N linhas, cada linha contendo um número (1 ≤ V ≤ 10100) correspondente ao valor que João quer montar com os leds.

Saída
Para cada caso de teste, imprima uma linha contendo o número de leds que João precisa para montar o valor desejado, seguido da palavra "leds".
*/

var vezes = parseInt(lines[0])
var valor = ''
var totalLeds = 0
var leds = [
  {
    numero: '1',
    led: 2
  },
  {
    numero: '2',
    led: 5
  },
  {
    numero: '3',
    led: 5
  },
  {
    numero: '4',
    led: 4
  },
  {
    numero: '5',
    led: 5
  },
  {
    numero: '6',
    led: 6
  },
  {
    numero: '7',
    led: 3
  },
  {
    numero: '8',
    led: 7
  },
  {
    numero: '9',
    led: 6
  },
  {
    numero: '0',
    led: 6
  }
]

for (let i = 1; i <= vezes; i++) {
  valor = lines[i]
  for (let j = 0; j < valor.length; j++) {
    for (let a = 0; a < leds.length; a++) {
      if (valor[j] === leds[a].numero) {
        totalLeds = totalLeds + leds[a].led
      }
    }
  }
  console.log(`${totalLeds} leds`)
  totalLeds = 0
}
/*for (let j = 0; j < valor.length; j++) {
  if (valor[j] === '1') {
    soma = soma + 2
  } else if (valor[j] === '2') {
    soma = soma + 5
  } else if (valor[j] === '3') {
    soma = soma + 5
  } else if (valor[j] === '4') {
    soma = soma + 4
  } else if (valor[j] === '5') {
    soma = soma + 5
  } else if (valor[j] === '6') {
    soma = soma + 6
  } else if (valor[j] === '7') {
    soma = soma + 3
  } else if (valor[j] === '8') {
    soma = soma + 7
  } else if (valor[j] === '9') {
    soma = soma + 6
  } else {
    soma = soma + 6
  }
}
console.log(soma)
soma = 0
*/
