import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'item-summary-dropdown',
	templateUrl: './item-summary-dropdown.component.html',
	styleUrls: ['./item-summary-dropdown.component.scss'],
})
export class ItemSummaryDropdownComponent implements OnInit {
	@Input() list: any[];
	@Output() onSelect = new EventEmitter<any>();

	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	open = false;
	qty = 111;

	selected;
	selectedIndex = 0;
	constructor() {}

	ngOnInit(): void {
		this.selected = this.list[0];
	}

	checkDropDown(open: boolean) {
		this.open = open;
		if (open) {
			var topPos = document.getElementsByClassName('item-row');
			this.myScrollContainer.nativeElement.scrollTop =
				topPos[this.selectedIndex].offsetTop - 20;
		} else {
		}
	}

	clickWaiting(selected, index) {
		this.selected = selected;
		this.selectedIndex = index;
		this.onSelect.emit(selected);
	}
}
