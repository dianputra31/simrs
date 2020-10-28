import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserCreateUserUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
	selector: 'add-purchaser-editor',
	templateUrl: './add-purchaser-editor.component.html',
	styleUrls: ['./add-purchaser-editor.component.scss'],
})
export class AddPurchaserEditorComponent implements OnInit {
	param = {
		email: '',
		first_name: '',
		last_name: '',
		gender: '',
		role_id: 1,
		company_id: 1,
		profile_picture_url: '',
	};
	@Output() addEvent = new EventEmitter();
	subscriptions: Subscription[];
	constructor(private http: HttpService) {}

	ngOnInit(): void {
		this.subscriptions = [];
	}

	ngOnDestroy() {
		this.subscriptions.forEach((each) => each.unsubscribe);
	}

	submit() {
		console.log(this.param);
		const sub = this.http
			.post(UserCreateUserUrl, this.param)
			.subscribe((resp) => {
				this.addEvent.emit();
			});

		this.subscriptions.push(sub);
	}
}
