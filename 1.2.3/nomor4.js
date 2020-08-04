// Deteksi Palindrome
let teks = 'kakak';
let x = teks.length - 1;
let hasil = '';

while (x >= 0) {
    hasil += teks[x];
    x = x - 1;
}

if (hasil == teks) {
    console.log('palindrom');
} else {
    console.log('bukan palindrome');
}

// Reverse Words
let teks = 'Saya belajar Javascript';
let reverseWords = teks.split(' ');
reverseWords.reverse();
teks = reverseWords.join(' ');

console.log(teks);
