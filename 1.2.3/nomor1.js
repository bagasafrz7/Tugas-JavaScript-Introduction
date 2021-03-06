const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error('Hari ini bukan hari kerja'));
			}
		}, 3000);
	});
};

// then catch
cekHariKerja('sabtu')
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

// try catch
async function day(day) {
	try {
		result = await cekHariKerja(day);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}
day('kamis');
