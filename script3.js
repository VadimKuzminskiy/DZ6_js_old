let word = 'A3lice 2Bob Er1nst';
let word2 = '2Fiona Ig7or J1amila B3ob Ali5ce';
let word3 = 'Tes1t';

let words = [word, word2, word3];

for (let i = 0; i < words.length; i++) {
  let arr = words[i].split(' ');

  let arrLetters = arr[0].split('');

  let filterNumber = arrLetters.filter(function(letter){
      return !!(+letter)
  });

  function getNumber(letter) {
      let number = letter.split('').filter(function(letter){
          return !!(+letter);
      })
      return number [0];
  }

  let sortedArr = arr.sort(function(a,b){
      return getNumber(a) - getNumber(b);
  }).join(' ');

  console.log(sortedArr);
}

