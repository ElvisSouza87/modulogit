let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);


//Exemplo com Objeto


let info = {
    nome: 'Elvis',
    sobrenome: 'Souza',
    idade:33
};

let novaInfo = {
    ...info,
    cidade: 'São Paulo',
    estado:'SP',
    pais: 'Brasil'
};

console.log(novaInfo);



