//Neste caso, o babel não será suficiente, pois está função que utiliza o operador Spread -> ''...'' precisa de um modulo espesifico
//para conseguir ser transpilado para o browser
// O ... -> permite receber  vários argumentos, sem precisar necessárimente saber quais são e quantos são!

const produto= {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone (objeto){
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'
console.log(produto, novoProduto)