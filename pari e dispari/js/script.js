let numero = prompt('Per favore inserisci un numero che sia compreso tra 1 e 5');

function casuale() {
    num = Math.round(Math.random() * 5) ;
    document.getElementById("casuale").innerHTML ="Numero casuale " + num;
}