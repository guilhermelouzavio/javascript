// operador ... restjuntar/spreed[espalhar]
// usar rest com parametros de funçao

// usar spreed com objeto

const funcionario = { nome: 'Maria', salario: 1234.90 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spreed com array 
const grupoA = ['joao', 'Pedro', 'gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)