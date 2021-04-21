import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';

@Component({
	selector: 'item-summary-dropdown',
	templateUrl: './item-summary-dropdown.component.html',
	styleUrls: ['./item-summary-dropdown.component.scss'],
})
export class ItemSummaryDropdownComponent implements OnInit {
	@Input() list: any;
	@Input() selected: String;
	@Input() nApproval: number;
	@Output() onSelect = new EventEmitter<any>();

	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	open = false;

	constructor(private _redirectparam: RedirectParameterService) {}

	ngOnInit(): void {
		this.getCurrentTrx();
	}

	getCurrentTrx() {
		setInterval(() => {
			this.nApproval = this._redirectparam.nApproval;
	   }, 2000);
	}

	checkDropDown(open: boolean) {
		this.open = open;
		if (open) {
			// var topPos = document.getElementsByClassName(this.selected.name);
			// this.myScrollContainer.nativeElement.scrollTop =
			// 	topPos[0].offsetTop - 20;
		}
	}

	click(selected) {
		this.onSelect.emit(selected);
	}
}
