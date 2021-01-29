// Criando número de telefone a partir de um array 


arr = [1 ,2, 3 , 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(arr) {
    
    if (typeof arr !== 'string') arr.toString();
    newString = '';
    for(i=0; i<arr.length; i++)
    {
        if (i === 0) newString+= '(';
        if (i === 3) newString+= ')' + ' ';
        if (i === 6) newString+= '-';

        newString += arr[i]
        
    }
    return console.log(newString);
}
createPhoneNumber(arr);
