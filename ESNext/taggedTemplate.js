// tagged templates - processa o template dentro de uma funçao

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Dutra String'
}

const aluno = 'gui'
const situacao = 'apavorado'
console.log(tag `${aluno} está ${situacao}`)