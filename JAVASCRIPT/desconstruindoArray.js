let array = ['Elvis Souza', 'Elvis' , 'Souza' ,'@Elvis87' ];

let [nomeCompleto, ,, instagram] = array;

console.log(nomeCompleto, instagram);

//outro exemplo

let [nome , sobrenome, idade=90 ] =  ['Elvis', 'Souza']

console.log(nome, sobrenome,idade);

//outro exemplo

function criar () {
    let a = [1,2,3];
    return a;
}

let [a,b,c] = criar();

console.log(a,b,c);



