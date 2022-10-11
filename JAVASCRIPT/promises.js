function pegarTemperatura () {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function() {
            resolve('40 na smobra');
        }, 2000);
    });
}

//USANDO A PROMISE

let temp = pegarTemperatura();
temp.then(function(resultado) {
    console.log("TEMPERATURA: "+resultado)
});

temp.catch(function(error) {
    console.log("Eita, deu erro!");
});