import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
  selector: 'info-bagian-card',
  templateUrl: './info-bagian-card.component.html',
  styleUrls: ['./info-bagian-card.component.scss']
})
export class InfoBagianCardComponent implements OnInit {

  @Input() index: number;
	@Input() bagian: any;
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
