const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const mulher = m => m.genero === 'F'
const pais = p => p.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios.filter(mulher).filter(pais).reduce(menorSalario)
    console.log(func)
})