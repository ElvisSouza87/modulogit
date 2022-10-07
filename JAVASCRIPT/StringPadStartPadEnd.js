let telefone = '5435';

console.log(telefone.padEnd(9, '*') );

console.log(telefone.padStart(9, '*') );


//outro exemplo

let cartao = '2355655448543549';

let lastDidits = cartao.slice(-4);

let cartaoMascarado = lastDidits.padStart(16, '*');

console.log('Este é seu cartão? '+cartaoMascarado);







