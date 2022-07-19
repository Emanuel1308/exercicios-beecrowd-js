var input = require('fs').readFileSync('./1044/stdin', 'utf8')
var lines = input.split(' ')

/*

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
*/

var [A, B] = lines.map(item => parseInt(item))

if (A > B) {
  if (A % B === 0) {
    console.log('Sao Multiplos')
  } else {
    console.log('Nao sao Multiplos')
  }
  //Se o B for maior que A
} else {
  if (B % A === 0) {
    console.log('Sao Multiplos')
  } else {
    console.log('Nao sao Multiplos')
  }
}
