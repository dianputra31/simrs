import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.scss']
})
export class RedButtonComponent implements OnInit {
  @Input() label: String ='test';
  @Input() font:String = '80px';
  @Input() paddingtop:String = '50px';
  @Input() paddingbottom:String = '50px';
  @Input() paddingleft:String = '50px';
  @Input() paddingright:String = '50px';
  @Input() float:String = 'left';
  @Input() width:String = '129px'
  constructor() { }

  ngOnInit(): void {
  }

}
