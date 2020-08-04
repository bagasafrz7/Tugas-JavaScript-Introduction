const printSegitiga = 5;
let i = printSegitiga;

if (typeof i === 'number') {
	for (i; i >= 1; i--) {
		let result = '';
		j = i;
		for (j = 1; j <= i; j++) {
			result += j;
		}
		console.log(result);
	}
} else {
	console.log('Data Harus Number');
}
