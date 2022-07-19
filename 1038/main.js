var input = require('fs').readFileSync('./1038/stdin', 'utf8')
var lines = input.split(' ')

/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

---CODIGO---ESPECIFICAÇÃO----------PREÇO
      1      Cachorro-quente        4
      2      X-salada               4,50
      3      X-bacon                5,00
      4      Torrada simples        2,00
      5      Refrigerante           1,50
Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/

var itemCodigo = parseInt(lines[0])
var qtdIntem = parseInt(lines[1])
var precoTotal = 0

var precosItens = [4.0, 4.5, 5.0, 2.0, 1.5]

for (let i = 1; i <= precosItens.length; i++) {
  switch (itemCodigo) {
    case i:
      precoTotal = (precosItens[i - 1] * qtdIntem).toFixed(2)
  }
}
console.log(`Total: R$ ${precoTotal}`)
