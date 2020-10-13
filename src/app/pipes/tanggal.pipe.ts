import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'tanggal',
})
export class TanggalPipe extends DatePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return super.transform(value, 'd MMM y HH:mm');
	}
}
