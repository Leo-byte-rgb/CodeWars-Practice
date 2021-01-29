//Transformando arrays em Strings


names = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])



function list(names){
    let str = '';
    if (names.length !== 0) {
      let last = names.pop();
      str = names.map( (val, i, arr) => {
        if (i !== arr[arr.length - 1]) {
          return val.name;
        }
      }).join(', ')
       
      str += str !== '' ? ' & ' + last.name : last.name;
    }
     
    return str;
  }

  console.log(list(names))