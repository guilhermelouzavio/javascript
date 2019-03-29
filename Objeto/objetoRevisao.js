// coleçao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do Produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABB',
            numero: 1223
        }
    },
    condutores: [{
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42

        }
    ],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)