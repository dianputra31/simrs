import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';


@Component({
	selector: 'account-layout',
	templateUrl: './account-layout.component.html',
	styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {
	datacompany;
	datauser;
	account;

	constructor(private http: HttpService, ) { }

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];
		this.datacompany = JSON.parse(localStorage.getItem('company'));
		this.account = JSON.parse(localStorage.getItem('account'));

		const sub = this.http.get(ProfileUrl, '').subscribe(
			resp => {
				this.datauser = resp.data.profile;

			}
		)
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');

	}


	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-acc.svg';
	}
 


}
