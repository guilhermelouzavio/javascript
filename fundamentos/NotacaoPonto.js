console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'bola'
    // obj['nome'] = 'bola2'

console.log(obj.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')

console.log(obj3.nome)
console.log(obj2.nome)