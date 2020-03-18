//  conceito de referência
const a = {name: 'Teste'}
console.log(a)

const b = a 
console.log(b)

b.name = 'Opa'

console.log(a)

let c = 3
let d = c
d++ 

console.log(c)
console.log(d)

// null e Undefined

let valor // não inicializada
console.log(valor) // underfined

// console.log(valor2) not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
