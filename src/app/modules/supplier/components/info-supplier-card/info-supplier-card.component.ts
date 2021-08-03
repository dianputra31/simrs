import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
  selector: 'info-supplier-card',
  templateUrl: './info-supplier-card.component.html',
  styleUrls: ['./info-supplier-card.component.scss']
})
export class InfoSupplierCardComponent implements OnInit {


  @Input() index: number;
	@Input() supplier: any;
  @Output() deleteEvent = new EventEmitter();
	@Output() editEvent = new EventEmitter();
	@BlockUI() blockUI: NgBlockUI;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  editData() {
		this.editEvent.emit();
	}

	deleteData() {
		this.deleteEvent.emit();
	}
}
