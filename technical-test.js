//TASK #4
function generateAcronym(name) {
    let words = name.split(" ");

    let firstName = words[0].split("-").map(a => a[0].toUpperCase()).join("");

    let lastName = words.slice(1).map((word, index) => {
        if (word.toLowerCase() === "von") {
            return "v";
        } else {
            return word.split("-").map(a => a[0].toUpperCase()).join("");
        }
    }).join("");

    return firstName + lastName;
}

console.log(generateAcronym("Thomas Meyer"));
console.log(generateAcronym("martin schmidt"));
console.log(generateAcronym("Jan-Erich Schmidt"));
console.log(generateAcronym("Jan Erich Mueller"));
console.log(generateAcronym("Paul Meyer-Schmidt"));
console.log(generateAcronym("Paul von Lahnstein"));
console.log(generateAcronym("Martin von Lahnstein-Meyer"));


//TASK #3
function combineStrings(str1, str2, str3) {
    let result = '';

    for (let i = 0; i < str1.length; i++) {
        result += str1[i] + str2[i] + str3[i];
    }

    return result;
}

console.log(combineStrings("aa", "bb", "cc"));
console.log(combineStrings("abc", "def", "ghi"));
console.log(combineStrings("qwe", "asd", "zxc"));


//TASK #2 (Not Sure)
function remainder(n, m) {
    if (n === 0 && m === 0) return NaN;
    if (n === 0 || m === 0) return NaN;

    const l = Math.max(n, m);
    const s = Math.min(n, m);

    return l % s;
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));


//TASK #1 (Not sure)
function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    let x = 0;
    let y = 0;

    for (let direction of walk) {
        if (direction === 'n') y += 1;
        else if (direction === 's') y -= 1;
        else if (direction === 'e') x += 1;
        else if (direction === 'w') x -= 1;
    }

    return x === 0 && y === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 's']));
console.log(isValidWalk(['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'e', 'e']));






