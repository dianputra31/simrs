import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>
		<ngbd-toast-global></ngbd-toast-global>`,
})
export class AppComponent {
	title = 'e-procurement2';
}
