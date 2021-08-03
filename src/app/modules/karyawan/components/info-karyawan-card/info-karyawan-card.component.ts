import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
  selector: 'info-karyawan-card',
  templateUrl: './info-karyawan-card.component.html',
  styleUrls: ['./info-karyawan-card.component.scss']
})
export class InfoKaryawanCardComponent implements OnInit {

  @Input() index: number;
	@Input() karyawan: any;
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
