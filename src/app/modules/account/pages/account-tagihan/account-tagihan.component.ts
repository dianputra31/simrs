import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RESPONSE, TagihanCompany } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';


@Component({
  selector: 'account-tagihan',
  templateUrl: './account-tagihan.component.html',
  styleUrls: ['./account-tagihan.component.scss']
})
export class AccountTagihanComponent implements OnInit {
  subsribers: Subscription[];
  limit: number = 30;
	page: number = 1;
	totalPages: number;
	paramet;
	hist;

	innerHeight: any;
	leftContainerHeight: any;
	rightContainerHeight: any;
	topFixed: any;
	headers: any;
	isSpinner: Boolean = false;
	items: any;

	selector: string = '#left-container';
  @Inject(DOCUMENT) private _document: Document;
  
  constructor(
    private service: BaseService, 
		private http: HttpService,
		private router: Router
  ) { }

  ngOnInit(): void {
    this.hist = [];
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subsribers = [];
    
			
		this.getBase(this.page);
		const body = document.getElementsByTagName('body')[0];
		body.classList.add('no-scroll');
  }


  getBase(ev){

		var paramet: any = {
			page: this.page,
			limit: this.limit,
		};

		this.getItems(paramet,1);
	}


	getItems(paramet, src){
    this.isSpinner = true;
    

   	const sub = this.http.post(TagihanCompany+'?page='+paramet.page+'&limit='+this.limit, paramet)
		.subscribe((resp) => {
			this.isSpinner = false;

			if (resp.status.rc === RESPONSE.SUCCESS) {
				var newData = resp.data;

				if(src=='1'){
					this.hist = this.hist.concat(newData);
				}else{
					this.hist = newData;
				}


				this.initScrolling();

			}else{
				this.service.showAlert(resp.status.msg);
			}

			
		});
	this.subsribers.push(sub);
	}


	@HostListener('window:resize', ['$event'])
	onResize() {
		this.innerHeight = window.innerHeight;

		this.leftContainerHeight =
			this.innerHeight - this.topFixed - this.headers;

	}

	onScrollDown(e) {
		console.log('scrolled down!!', e);
		this.getBase(this.page++);
	}

	initScrolling() {
		this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.headers = document?.getElementById('headers')?.offsetHeight;
		this.onResize();
  }
  

  ngOnDestroy() {
		this.subsribers.forEach((x) => x.unsubscribe());
	}



}
