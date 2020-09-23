export class QuantityModel {
	public qty: number;
	public qtyDisplay: string;

	public display() {
		var separator;
		var prefix = '';
		var angka = this.qty.toString();
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split = number_string.split(','),
			sisa = split[0].length % 3,
			rupiah = split[0].substr(0, sisa),
			ribuan = split[0].substr(sisa).match(/\d{3}/gi);

		// tambahkan titik jika yang di input sudah menjadi angka ribuan
		if (ribuan) {
			separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

		return prefix == undefined ? rupiah : rupiah ? rupiah : '';
	}

	public sanitizedNumber(): number {
		return Number(this.qtyDisplay.toString().replace('.', ''));
	}
}
