const notas = [7.7, 8.9, 9, 1, 4, 5, 6]

// SEM CALLBACK

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


// COM CALLBACK

const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

const NotasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(NotasMenorQue7)
console.log(notasBaixas3)