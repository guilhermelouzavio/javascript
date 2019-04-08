const carrinho = [
    '{"nome": "Borracha" , "preco" : 3.45 }',
    '{"nome": "Caderno" , "preco": 13.90}',
    '{"nome": "Kit de Lapis" , "preco" : 41.22}',
    '{"nome": "Caneta" , "preco": 7.50}'

]

// Retornar um array apenas com os precos

// minha resolucao

const apenasPreco = carrinho.map(function(json) {
    const produto = JSON.parse(json)
    return `Preço: ${produto.preco}`

})

console.log(apenasPreco)

//resolucao do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => `preço: ${produto.preco}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)