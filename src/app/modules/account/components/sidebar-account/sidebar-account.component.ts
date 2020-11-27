import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-account',
  templateUrl: './sidebar-account.component.html',
  styleUrls: ['./sidebar-account.component.scss']
})
export class SidebarAccountComponent implements OnInit {
  @Input() datauser: any;

  constructor() { }

  ngOnInit(): void {
  }


  
	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-acc.svg';
	}
 

}
