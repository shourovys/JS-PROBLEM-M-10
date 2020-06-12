const array = [4, 5, 3, 5, 3, 5, 7, 56, 3];

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }
  return sum;
}

console.log(arraySum(array));
