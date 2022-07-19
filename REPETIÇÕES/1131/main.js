var input = require('fs').readFileSync('./REPETIÇÕES/1131/stdin', 'utf8')
var lines = input.split('\r\n')

/*
A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística do resultado de vários GRENAIS. Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de gols marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:

- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor", caso termine empatado).

Entrada
O arquivo de entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente. Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.

Saída
Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio" deve ser impressa sem acento, conforme o exemplo abaixo.
*/

var golsInter = 0
var golsGremio = 0
var vitoriaInter = 0
var vitoriaGremio = 0
var empate = 0
var grenais = 1 //Já começa com um pos quando o codigo compilar já vai fazer um grenau
var escolha = 0
var valores = []
var j = 1 //Sempre vai receber as opções de escolha, que estão sempre um valor depois do i
var i = 0

do {
  valores = lines[i].split(' ')
  golsInter = parseInt(valores[0])
  golsGremio = parseInt(valores[1])
  if (golsInter > golsGremio) {
    vitoriaInter++
  } else if (golsGremio > golsInter) {
    vitoriaGremio++
  } else {
    empate++
  }

  console.log('Novo grenal (1-sim 2-nao)')
  escolha = parseInt(lines[j])

  if (escolha == 1) {
    grenais++
  } else if (escolha == 2) {
    console.log(`${grenais} grenais`)
    console.log(`Inter:${vitoriaInter}`)
    console.log(`Gremio:${vitoriaGremio}`)
    console.log(`Empates:${empate}`)
    if (vitoriaInter > vitoriaGremio) {
      console.log('Inter venceu mais')
    } else if (vitoriaGremio > vitoriaInter) {
      console.log('Gremio venceu mais')
    } else {
      console.log('Nao houve vencedor')
    }
    return
  }
  i = i + 2
  j = j + 2
} while (escolha != 2)
