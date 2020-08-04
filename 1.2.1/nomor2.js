const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (rataRata >= 90) {
	console.log('Rata-rata = ' + rataRata + '\nGrade = A');
} else if (rataRata >= 80) {
	console.log('Rata-rata = ' + rataRata + '\nGrade = B');
} else if (rataRata >= 70) {
	console.log('Rata-rata = ' + rataRata + '\nGrade = C');
} else if (rataRata >= 60) {
	console.log('Rata-rata = ' + rataRata + '\nGrade = D');
} else {
	console.log('Rata-rata = ' + rataRata + '\nGrade = E');
}
