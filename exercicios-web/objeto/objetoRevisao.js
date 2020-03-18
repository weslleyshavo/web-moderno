// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Shavo',
        idade: 30,
        endereco: {
            logradouro: 'Av. das Castanheiras',
            numero: 1000
        }
    },
    condutores: [{
        nome: 'Patrícia',
        idade: 23
    },{
        nome: 'Shavo',
        idade: 30
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 4150
carro['proprietario']['endereco']['logradouro'] = 'Av. das Araucárias'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)