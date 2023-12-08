function convertToRoman(num) {
	const dict = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"]
	]

	var romanNum = ""
	var i = 0

	while (num > 0) {
		if (num % dict[i][0] != num) {
			romanNum += dict[i][1]
			num -= dict[i][0]
		} else {
			i += 1
		}
	}

	return romanNum;
}

console.log(convertToRoman(4));

