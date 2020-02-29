let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports/*this*/)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow function ganha
comparaComThisArrow(module.exports)