const getMonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = [
			'January', 'February', 'March',
			'April', 'May', 'Juni',
			'July', 'August', 'September',
			'October', 'November', 'Desember'
		];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error('Sory Data Not Foud', []));
		}
	}, 4000);
};

const showMonth = (isError, data) => {
	if (isError === null) {
		data.map((value, index) => console.log(value));
	} else {
		console.log(isError);
	}
};

getMonth(showMonth);
