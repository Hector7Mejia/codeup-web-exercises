function removeVowels(string) {
    let newStringToMake = "";

    for (let i = 0; i < string.length; i++) {
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            continue;
        } else {
           newStringToMake += string[i];
        }
    }
    return newStringToMake;

}

console.log(removeVowels("banana"));