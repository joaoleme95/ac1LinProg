// Exercício 1
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new Usuario('João', 20),
    new Usuario('Maria', 25),
    new Usuario('Pedro', 30)
];

const nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log(nomesMaiusculos);

// Exercício 2
const maioresDe18 = usuarios.filter(usuario => usuario.idade > 18);
console.log(maioresDe18);

// Exercício 3
const usuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log(usuarioEntre25e30);

// Exercício 4
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosParesDobro = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2);
console.log(numerosParesDobro);

// Exercício 5
class Animal {
    emitirSom() {
        console.log('Som do animal');
    }

    correr() {
        console.log('Animal correndo');
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('Au Au');
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log('Miau');
    }
}

const cachorro = new Cachorro();
const gato = new Gato();
cachorro.emitirSom();
gato.emitirSom();

// Exercício 6
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

const livros = [
    new Livro('Livro 1', 200),
    new Livro('Livro 2', 400),
    new Livro('Livro 3', 500)
];

const livrosMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
console.log(livrosMaisDe300Paginas);

// Exercício 7
class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

const carros = [
    new Carro('Toyota', 2015),
    new Carro('Honda', 2018),
    new Carro('Toyota', 2019)
];

const primeiroToyotaApos2010 = carros.find(carro => carro.marca === 'Toyota' && carro.ano > 2010);
console.log(primeiroToyotaApos2010);

const carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);
console.log(carrosFabricadosApos2010);

// Exercício 8
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produtos = [
    new Produto('Produto 1', 50),
    new Produto('Produto 2', 120),
    new Produto('Produto 3', 200)
];

const produtosComPrecoAumentado = produtos.map(produto => {
    produto.preco *= 1.1; // Aumentando o preço em 10%
    return produto;
});
console.log(produtosComPrecoAumentado);

// Exercício 9
const primeiroProdutoCaro = produtos.find(produto => produto.preco > 100);
if (primeiroProdutoCaro) {
    primeiroProdutoCaro.nome = 'Produto Caro';
}
console.log(produtos);

// Exercício 10
const numerosDivisiveisPor3AoQuadrado = numeros.filter(numero => numero % 3 === 0).map(numero => numero ** 2);
console.log(numerosDivisiveisPor3AoQuadrado);
