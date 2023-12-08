function rot13(str) {
    var str1 = str.split("")
    var str2 = []

    str1.forEach(char => {
        if (char.charCodeAt(0) <= 90 && (char.charCodeAt(0) >= 65)) {
            if (char.charCodeAt(0) <= 77) {
                str2.push(String.fromCharCode(char.charCodeAt(0) + 13))
            }
            if (char.charCodeAt(0) >= 78) {
                str2.push(String.fromCharCode(char.charCodeAt(0) - 13))
            }
        } else {
            str2.push(char)
        }
    });

    return str2.join('');
}

console.log(rot13("SERR PBQR PNZC"));