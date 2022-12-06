 let word = prompt('Per favore inserisci una parola');

let parola = 'palindroma';

let parolaInversa = invertiParola;

if(parola == parolaInversa){
    console.log('la parola è palindroma');
}
else{
    console.log('la parola non è palindroma');
}

function invertiParola(str){
    let strInversa = str.split('').reverse().join('');
    return strInversa;
}