var input = require('fs').readFileSync('./REPETIÇÕES/1146/stdin', 'utf8')
var lines = input.split('\r\n')

var valor = 0
var valores = ''
var i = 0
do {
  valor = parseInt(lines[i])
  if (valor !== 0) {
    for (let j = 1; j < valor; j++) {
      valores += `${j} `
    }
    valores += `${valor}` //Espera para colocar o valor por ultimo para não receber espaçamentos depois dele
    console.log(valores)
  } else {
    return
  }
  valores = '' //É preciso zerar a variavel no final para receber valores novos
  i++
} while (valor !== 0)
