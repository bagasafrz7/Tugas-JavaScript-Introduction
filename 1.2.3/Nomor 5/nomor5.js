let arkFood = (harga, voucher, jarak, pajak) => {
	// proses
	let potongan = diskon(harga, voucher);
	let ongkir = biayaJarak(jarak);
	let kenaPajak = potongPajak(pajak, harga);
	// let subTotal3 = harga - potongan + ongkir + kenaPajak;

	let total = `	Harga       : ${harga}
	Potongan    : ${potongan}
	Biaya Antar : ${ongkir}
	Pajak       : ${kenaPajak}
	SubTotal    : ${harga - potongan + ongkir + kenaPajak}`;

	console.log(total);
};

function diskon(harga, voucher) {
	let potonganFood5 = 50000;
	let potonganDemi = 30000;
	if (voucher === 'ARKFOOD5') {
		// proses diskon 50%
		let potongHarga = harga * 50 / 100;
		if (potongHarga >= 50000 && harga >= 50000) {
			potonganFood5 = 50000;
			return potonganFood5;
		} else if (harga < 50000) {
			potonganFood5 = 0;
			return potonganFood5;
		} else if (potongHarga <= 50000) {
			potonganFood5 = potongHarga;
			return potonganFood5;
		}
	} else if (voucher === 'DITRAKTIRDEMI') {
		// proses diskon 60%
		let potongHarga = harga * 60 / 100;
		if (potongHarga >= 30000 && harga >= 25000) {
			potonganDemi = 30000;
			return potonganDemi;
		} else if (harga < 25000) {
			potonganDemi = 0;
			return potonganDemi;
		} else if (potongHarga <= 30000) {
			potonganDemi = potongHarga;
			return potonganDemi;
		}
	} else if (voucher === false) {
		// kode promo false
		let potongan = 0;
		return potongan;
	}
	return diskon;
}


function biayaJarak(jarak) {
	let jarakPer = (jarak - 2) * 3000;
	if (jarak === false) {
		let ongkir = 0;
		return ongkir
	} else if (jarak <= 2) {
		let ongkir = 5000; // 2 KM
		return ongkir;
	} else if (jarak >= 2) {
		let ongkir = 5000 + jarakPer;
		return ongkir;
	}
}

function potongPajak(pajak, harga) {
	if (pajak === true) {
		biayaPajak = harga * 5 / 100;
		return biayaPajak;
	} else if (pajak === false) {
		biayaPajak = 0;
		return biayaPajak;
	}
}

arkFood(150000, 'ARKFOOD5', 5, true);
// arkFood(75000, 'DITRAKTIRDEMI', 5, true);
