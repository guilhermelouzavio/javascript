//par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'
    return saudacao // contexto léxico 2
}

// objetos sao grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)