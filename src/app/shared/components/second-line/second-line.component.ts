import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'second-line',
  templateUrl: './second-line.component.html',
  styleUrls: ['./second-line.component.scss']
})
export class SecondLineComponent implements OnInit {
  @Input() title: String;
	@Input() content: String;
  constructor() { }
 
  ngOnInit(): void {
  }

}
