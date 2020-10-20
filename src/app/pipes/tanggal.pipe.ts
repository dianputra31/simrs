import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'tanggal',
})
export class TanggalPipe extends DatePipe implements PipeTransform {
	transform(value: any, tipe?: any): any {
		switch (tipe) {
			case 'tgl':
				return super.transform(value, 'd MMMM y');
			case 'dmy':
				return super.transform(value, 'd/M/yy');
			default:
				return super.transform(value, 'd MMMM y h:mm a');
		}
	}
}
