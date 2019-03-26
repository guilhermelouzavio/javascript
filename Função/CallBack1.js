const fabricantes = ["Mercedes", "Audi", "bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante))