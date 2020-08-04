const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	let awal = nilaiAwal;
	let akhir = nilaiAkhir;
	let arr = dataArray.length;

	if (awal < akhir && arr > 5) {
		let checkRasio = dataArray.filter((value) => value >= awal && value <= akhir);
		checkRasio.sort((a, b) => a - b);
		// checkRasio.sort(function(a, b) {
		// 	return a - b;
		// });
		console.log(checkRasio);
	} else if (arr < 5) {
		console.log('Jumlah data dalam dataArray tidak ada');
	} else {
		console.log('Nilai Akhir harus lebih besar dari Awal');
	}
};

seleksiNilai(5, 20, [ 2, 25, 4, 14, 17, 30, 8 ]);
seleksiNilai(15, 3, [ 2, 25, 4, 14, 17, 30, 8 ]);
seleksiNilai(5, 17, [ 2, 25, 4 ]);
