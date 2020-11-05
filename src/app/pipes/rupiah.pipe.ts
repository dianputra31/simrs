import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rupiah',
})
export class RupiahPipe implements PipeTransform {
	transform(value: number, args?: any): string {
		value = value ? value : 0;

		switch (args) {
			case 'with-minus':
				return (
					'-Rp' +
					value
						.toString()
						.split('-')[1]
						.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
				);
			case 'no-rp':
				return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
			case 'bulat':
				return (
					'Rp. ' +
					value.toString().replace(/,/g, '.')
				);
			default:
				return (
					'Rp. ' +
					value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
				);
		}
	}
}
