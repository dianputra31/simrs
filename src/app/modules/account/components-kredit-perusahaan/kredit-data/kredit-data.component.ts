import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kredit-data',
  templateUrl: './kredit-data.component.html',
  styleUrls: ['./kredit-data.component.scss']
})
export class KreditDataComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
