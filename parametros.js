// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
};

console.log(soma(20, 10));

// parâmetros e argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade e ${idade}`;
};

console.log(nomeIdade(40, 'Juliana'));

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
};

console.log(multiplica(soma(4, 5)));

function comprimentar() {
    return 'Oi gente!';
}

function comprimentaPessoa(nomePessoa) {
    console.log(`${comprimentar()} Meu nome é ${nomePessoa}`);
};

comprimentaPessoa('Paula');