// In this little assignment you are given a 
//string of space separated numbers, and have 
//to return the highest and lowest number.

str = ('15 11 12')


function HestAndLest(string) {

    newStr = string.split(' ').join(',').split(',')
    console.log(newStr)
    let min = 9999;
    let max = -9999;
    for (let i = 0; i<=newStr.length; i++) {
        if (newStr[i] < min) min = newStr[i];
        if (newStr[i] > max) max = newStr[i];

    }
    
    return console.log(`O mínimo é: ${min} e o máximo: ${max}`);
}

HestAndLest(str)