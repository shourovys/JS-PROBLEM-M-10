const name = "ame jame khame mamai jane nane tio"
let count = 0;
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if (element == ' ' && element - 1 != " ") {
        count += 1
    }
} count++
console.log(count);
