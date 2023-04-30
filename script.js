
const arr = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

let result = [];
let count = 0;
let current = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === current) {
    count++;
  } else {
    result.push(count);
    count = 1;
    current = arr[i];
  }
}

result.push(count);

console.log(result); 