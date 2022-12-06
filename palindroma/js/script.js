 let word = prompt('Per favore inserisci una parola');

let check  = checkPalindroma(word);


if(check == word){
    console.log('la parola è palindroma');
}
else{
    console.log('la parola non è palindroma');
}

function checkPalindroma(str){
    let strInversa = str.split('').reverse().join('');
    return strInversa;
}