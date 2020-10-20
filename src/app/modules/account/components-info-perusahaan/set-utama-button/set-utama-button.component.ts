import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'set-utama-button',
	templateUrl: './set-utama-button.component.html',
	styleUrls: ['./set-utama-button.component.scss'],
})
export class SetUtamaButtonComponent implements OnInit {
  @Input() index: number
	@Input() utama : Boolean;
	constructor() {}

  ngOnInit(): void {
    if(this.index === 0){
      this.utama = true
    } else {
      this.utama = false
    }
  }
}
