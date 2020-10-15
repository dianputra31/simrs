import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserCreateUserUrl } from '../../../../app.constant';

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
	constructor(private http: HttpClient) {}

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
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						// this.storageService.clear();
						// this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.addEvent.emit();
			});

		this.subscriptions.push(sub);
	}
}
