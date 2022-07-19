/*
Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
S = 1 + 1/2 + 1/3 + … + 1/100

Entrada
Não há nenhuma entrada neste problema.

Saída
A saída contém um valor correspondente ao valor de S.
O valor deve ser impresso com dois dígitos após o ponto decimal. 
*/

var A = 0
for (let i = 1; i <= 100; i++) {
  A += 1 / i
}
console.log(A.toFixed(2))

//1156
/*
Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

Entrada
Não há nenhuma entrada neste problema.

Saída
A saída contém um valor correspondente ao valor de S.
O valor deve ser impresso com dois dígitos após o ponto decimal.
*/
var S = 0
for (let i = 1, j = 1; i <= 39; i = i + 2, j = j * 2) {
  S += i / j
}
console.log(S.toFixed(2))
