var input = require('fs').readFileSync('./1050/stdin', 'utf8')
var lines = input.split('\n')

var A = parseInt(lines)
var objeto = [
  {
    ddd: 61,
    cidade: 'Brasilia'
  },
  {
    ddd: 71,
    cidade: 'Salvador'
  },
  {
    ddd: 11,
    cidade: 'Sao Paulo'
  },
  {
    ddd: 21,
    cidade: 'Rio de Janeiro'
  },
  {
    ddd: 32,
    cidade: 'Juiz de Fora'
  },
  {
    ddd: 19,
    cidade: 'Campinas'
  },
  {
    ddd: 27,
    cidade: 'Vitoria'
  },
  {
    ddd: 31,
    cidade: 'Belo Horizonte'
  }
]

if (
  lines != objeto[0].ddd &&
  lines != objeto[1].ddd &&
  lines != objeto[2].ddd &&
  lines != objeto[3].ddd &&
  lines != objeto[4].ddd &&
  lines != objeto[5].ddd &&
  lines != objeto[6].ddd &&
  lines != objeto[7].ddd
) {
  console.log('DDD nao cadastrado')
} else {
  for (let i = 0; i < objeto.length; i++) {
    switch (A) {
      case objeto[i].ddd:
        console.log(objeto[i].cidade)
        break
    }
  }
}

switch (A) {
  case 61:
    console.log('Brasilia')
    break
  case 71:
    console.log('Salvador')
    break
  case 11:
    console.log('Sao Paulo')
    break
  case 21:
    console.log('Rio de Janeiro')
    break
  case 32:
    console.log('Juiz de Fora')
    break
  case 19:
    console.log('Campinas')
    break
  case 27:
    console.log('Vitoria')
    break
  case 31:
    console.log('Belo Horizonte')
    break
  default:
    console.log('DDD nao cadastrado')
    break
}
