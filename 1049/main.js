var input = require('fs').readFileSync('./1049/stdin', 'utf8')
var [A, B, C] = input.split('\r\n')

if (A === 'vertebrado') {
  if (B === 'ave') {
    if (C === 'carnivoro') {
      console.log('aguia')
    } else if (C === 'onivoro') {
      console.log('pomba')
    }
  } else if (B === 'mamifero') {
    if (C === 'onivoro') {
      console.log('homem')
    } else if (C === 'herbivoro') {
      console.log('vaca')
    }
  }
}

if (A === 'invertebrado') {
  if (B === 'inseto') {
    if (C === 'hematofago') {
      console.log('pulga')
    } else if (C === 'herbivoro') {
      console.log('lagarta')
    }
  } else if (B === 'anelideo') {
    if (C === 'hematofago') {
      console.log('sanguessuga')
    } else if (C === 'onivoro') {
      console.log('minhoca')
    }
  }
}

