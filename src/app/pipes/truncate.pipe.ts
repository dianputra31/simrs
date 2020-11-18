import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
	transform(strtxt: string, args?: any): string {
		var ret = strtxt;
		if (strtxt.length > args) {
			ret = strtxt.substring(0, args) + '...';
		}
		return ret;
	}
}
