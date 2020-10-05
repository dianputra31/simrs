import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { AddressELement } from '../../../../models/address.model';

@Component({
	selector: 'item-summary-dropdown',
	templateUrl: './item-summary-dropdown.component.html',
	styleUrls: ['./item-summary-dropdown.component.scss'],
})
export class ItemSummaryDropdownComponent implements OnInit {
	@Input() list: AddressELement[] = [];
	@Input() selected: String;
	@Output() onSelect = new EventEmitter<any>();

	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	open = false;
	qty = 0;

	constructor() { }

	ngOnInit(): void {
		this.qty = this.list.length;
		// if (this.list != null) {
		// 	this.selected = this.list[0];
		// }
	}

	checkDropDown(open: boolean) {
		this.open = open;
		if (open) {
			// var topPos = document.getElementsByClassName(this.selected.name);
			// this.myScrollContainer.nativeElement.scrollTop =
			// 	topPos[0].offsetTop - 20;
		}
	}

	clickWaiting(selected) {
		this.selected = selected;
		this.onSelect.emit(selected);
	}
}
