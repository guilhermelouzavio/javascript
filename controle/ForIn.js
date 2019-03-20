//  const notas = [6.7, 8.7, 5, 3, 2, 0]

//  for (i in notas) {
//      console.log(i, notas[i])
//  }

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}