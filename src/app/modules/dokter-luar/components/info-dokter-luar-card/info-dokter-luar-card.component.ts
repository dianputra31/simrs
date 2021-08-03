import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
  selector: 'info-dokter-luar-card',
  templateUrl: './info-dokter-luar-card.component.html',
  styleUrls: ['./info-dokter-luar-card.component.scss']
})
export class InfoDokterLuarCardComponent implements OnInit {
  @Input() index: number;
	@Input() dokter: any;
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
