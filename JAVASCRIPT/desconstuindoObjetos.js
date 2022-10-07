let pessoa = {
    nome: 'Elvis',
    sobrenome: 'Souza',
    idade: 90,
    social : {
        facebook: 'ElvisSouza',
        instagram: 'Elvis87'
    },

    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}` ;
     }
};

let {nome:nomePrimeiro, sobrenome, idade = 28 } = pessoa; 

let {instagram} = pessoa.social;

let {nome, social:{facebook}} = pessoa;

console.log(nome, idade, instagram)

console.log(facebook, instagram)

console.log(nomePrimeiro, sobrenome, idade);

   