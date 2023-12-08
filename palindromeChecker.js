function isAlphanumeric(str) {
	return /^[a-zA-Z0-9]+$/.test(str)
}

function palindrome(str) {
	var str1 = str.split("")
	var str2 = []
	str1.forEach((str) => {
		if (isAlphanumeric(str)) {
			str2.push(str)
		}
	})
	console.log(str2)
	console.log(str2.reverse())
	if (str2.join().toLowerCase() == str2.reverse().join().toLowerCase()){
		return true;
	} else {
		return false;
	}
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
