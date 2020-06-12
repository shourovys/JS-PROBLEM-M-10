const array = [3, 4, 4, 3, 76, 3];
function arrayMax(array) {
    var max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
console.log(arrayMax(array));
