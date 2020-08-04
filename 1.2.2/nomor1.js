// 1

// 1.SORT = berfungsi mengurutkan elemen array.
let author = [ 'Pramoedya Ananta Toer', 'Joko Pinurbo', 'Tan Malaka', 'J.K. Rowling' ];
let sortAuthor = author.sort();
// console.log(sortAuthor);

// 2.SPLIT = berfungsi membagi objek String menjadi array string dengan memisahkan string menjadi substring
let str = 'Saya Cinta Indonesia';
let strSplit = str.split(' ');
// console.log(strSplit);

// 3.REVERSE = berfungsi membalik urutan elemen-elemen array, yang pertama menjadi yang terakhir, dan yang terakhir menjadi yang pertama
let reverseStr = strSplit.reverse();
// console.log(reverseStr);

// 4.JOIN = berfungsi menggabungkan semua elemen array menjadi string
str = reverseStr.join(' ');
// console.log(str);

// 5.MAP = berfungsi membuat array baru dengan hasil memanggil fungsi yang disediakan pada setiap elemen dalam array ini.
let genreBooks = [
	{ books: 'Harry Potter', genre: 'Fantasy Fiction' },
	{ books: 'Bumi Manusia', genre: 'Historical Fiction' },
	{ books: 'Madilog', genre: 'Non-Fiction' }
];

const newgenreBooks = genreBooks.map((value, index) => ({ allBooks: `${value.books}, ${value.genre}` }));

console.log(genreBooks);
console.log(newgenreBooks);

// 6.FILTER = berfungsi membuat larik baru dengan semua elemen larik ini yang mengembalikan fungsi penyaringan yang diberikan
const score = [ 60, 65, 70, 75, 80, 85, 90, 95, 100 ];
const checkScore = score.filter((value) => value >= 80);

// console.log(score);
// console.log(checkScore);

// 7.PUSH = berfungsi menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru
const name = [ 'Bagas' ];
name.push('Afrizal');

// console.log(name);

// 8.SHIFT() = berfungsi menghapus elemen pertama dari array dan mengembalikan elemen itu.
let scoreShift = score.shift();
// console.log(scoreShift);

// 9.POP = berfungsi menghapus elemen terakhir dari array dan mengembalikan elemen itu.
let scorePop = score.pop();
// console.log(scorePop);

// 10.LENGTH = berfungsi mengembalikan panjang string
const teks = 'Saya Belajar Javascript';
const testLength = teks.length;
// console.log(testLength);
