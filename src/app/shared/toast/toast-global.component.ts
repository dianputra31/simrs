import { Component } from '@angular/core';
import { ToastService } from './toast-service';

@Component({
	selector: 'ngbd-toast-global',
	templateUrl: './toast-global.component.html',
})
export class NgbdToastGlobal {
	constructor(public toastService: ToastService) {}
}
