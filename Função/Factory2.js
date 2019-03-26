function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 20
    }
}

console.log(criarProduto('Ana', 9.00))
console.log(criarProduto('joao', 4.00))