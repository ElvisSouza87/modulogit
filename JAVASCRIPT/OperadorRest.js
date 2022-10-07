function adicionar(...numeros) {

    console.log(numeros);
}

adicionar(12,5,16,18,08,32,33,55);

// Outro exemplo 

function incluir(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes

    ];

    return novoConjunto;
}

let nomes = ["Elvis", "Kate"];

let outros = incluir(nomes, "Camila", "Maria", "josé", "Guilherme");

console.log(outros);





    

