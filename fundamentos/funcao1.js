//funcçao sem retorno

function imprimiSoma(a, b) {

    console.log(a + b)
}

imprimiSoma(2, 3)

// funcao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))