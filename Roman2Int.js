//Conversor de números romanos para inteiros



const convertNum= {
    'I': 1,
    'V': 5, 
    'X': 10,
    'L': 50,
    'C': 100,
}
let n = 0;


function romain2Int(roman) {

    for (let i = 0; i < roman.length; i++) {
        let numeroAtual = roman[i];
        let proxNumero = roman[i+1];
        console.log(numeroAtual, proxNumero);
        if (proxNumero && convertNum[proxNumero] > convertNum[numeroAtual]) {
            n -= convertNum[numeroAtual];
        }
        else {
            n += convertNum[numeroAtual];
        }

    }
    return console.log(n);

}

romain2Int('IX');