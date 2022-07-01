function missingWords(s, t) {

    var missing = [];
    var a = s. split(' ');
    var b = t.split(' ');

    for(var i=0, j=0; i < a.length; i++){
        if(a[i] !== b[j]) {
            missing.push(a[i]);
        } else {
            j++;
        }
    }

    return missing;
}

console.log(missingWords("i like cheese", "no no i like cheese"));