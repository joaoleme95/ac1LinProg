
// Exercício 1
function operacoesBasicas(a, b) {
    console.log("Soma:", a + b);
    console.log("Subtração:", a - b);
    console.log("Multiplicação:", a * b);
    console.log("Divisão:", a / b);
}

let num1 = 10;
let num2 = 5;
operacoesBasicas(num1, num2);

// Exercício 2
function numerosImpares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

numerosImpares();

// Exercício 3
let texto = "Disciplina de Programação para web";
console.log("Quantidade de caracteres:", texto.length);

// Exercício 4
function formatarEmail(nome) {
    let partesNome = nome.toLowerCase().split(" ");
    let primeiroNome = partesNome[0];
    let ultimoNome = partesNome[partesNome.length - 1];
    console.log(`${primeiroNome}.${ultimoNome}@facens.br`);
}

let nome = "João Leme";
formatarEmail(nome);

// Exercício 5
function imprimirNumeros() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i;
        if (i < 10) {
            output += " - ";
        }
    }
    console.log(output);
}

imprimirNumeros();

// Exercício 6
function dobrarNumero(numero) {
    if (numero <= 0) {
        console.log("Só é aceito números positivos maiores que zero");
    } else {
        console.log(numero * 2);
    }
}

dobrarNumero(5);

// Exercício 7
function inverterString(texto) {
    return texto.split("").reverse().join("");
}

console.log(inverterString("Hello World"));

// Exercício 8
function contarVogais(texto) {
    let vogais = texto.match(/[aeiou]/g);
    return vogais ? vogais.length : 0;
}

console.log(contarVogais("Hello World"));

// Exercício 9
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(validarEmail("exemplo@dominio.com"));

// Exercício 10
function ehPalindromo(texto) {
    let textoSemEspacos = texto.replace(/\s/g, "").toLowerCase();
    let textoInvertido = textoSemEspacos.split("").reverse().join("");
    return textoSemEspacos === textoInvertido;
}

console.log(ehPalindromo("arara"));
