const array = [
    4,
    645,
    3,
    4,
    3,
    43,
    3,
    4,
    5,
    43,
    3,
    545,
    43,
    3,
    55,
    34,
    5,
    5,
    4,
    5,
    5,
    4,
];

var unique = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const index = unique.indexOf(element);

    if (index == -1) {
        unique.push(element);
    }
}
console.log(unique);
