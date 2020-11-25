import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tagihan-data',
  templateUrl: './tagihan-data.component.html',
  styleUrls: ['./tagihan-data.component.scss']
})
export class TagihanDataComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  slideHtml;
	lihatTagihanDetail(tagihan) {
		this.router.navigate([]).then((result) => {
			window.open(
				window.location.origin +
					'/#/account/tagihan-print/' +
					tagihan.invoice_no,
				'_blank'
			);
		});
	}

}
