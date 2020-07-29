import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'floating-footer',
	templateUrl: './floating-footer.component.html',
	styleUrls: ['./floating-footer.component.scss'],
})
export class FloatingFooterComponent implements OnInit {
	constructor(public toastService: ToastService, private router: Router) {}

	ngOnInit(): void {}

	tambahkanKeKeranjang(dangerTpl) {
		this.showDanger(dangerTpl);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 5000,
			classname: 'kanan-atas',
		});
	}
}
