// 2

const name = [
	'Abigail',
	'Alexandra',
	'Alison',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'Carolyn',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope'
];

const searchName = (searchWord, limit, callback) => {
	let sensitiveName = name.join(' ').toLowerCase().split(' ');
	let taskName = sensitiveName.filter((value) => value.includes(searchWord));
	taskName.splice(limit);

	callback(taskName);
};

const showSearch = (taskName) => {
	console.log(taskName);
};

searchName('an', 3, showSearch);
