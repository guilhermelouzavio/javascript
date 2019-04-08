const pilotos = ['Vetel , Alonso', 'Raikonen', 'Massa']

pilotos.pop() // massa quebrou o carro !!
console.log(pilotos)

pilotos.push('Verstappen') // coloca no final
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro
console.log(pilotos)

// adcionar

pilotos.splice(2, 0, 'BOttas', 'Massa')
console.log(pilotos)

// remover 
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)