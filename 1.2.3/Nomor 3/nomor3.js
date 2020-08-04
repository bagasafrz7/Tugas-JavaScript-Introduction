const getData = fetch('https://jsonplaceholder.typicode.com/users');

getData
	.then((response) => {
		return response.json();
	})
	.then((result) => {
		const names = result.map((person) => console.log(person.name));
	})
	.catch((error) => {
		console.log(new Error('Data tidak ditemukan!'));
	});
