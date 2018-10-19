//no JavaScript não existe classe, mas nas novas versões é possível criar uma classe, que no fundo é uma função
// e utilizar o recurso EXPORT e IMPORT para utilizá-la.

// OBS: Alguns recursos do ES6 ainda não foram implementados em todos os browser, IMPORT E EXPORT é um caso,
// por isso é preciso utilizar o modulo do tranpilador Babel para que seja possível utilizar este código atualiado
export default class Pessoa {
    constructor(name){
        this.name = name
    }

    toString(){
        return `Pessoa: ${this.name}`
    }
}


const pessoa = new Pessoa('Giorgy')
console.log(pessoa.toString())