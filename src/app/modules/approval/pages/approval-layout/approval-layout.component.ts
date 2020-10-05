import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressListUrl, ApprovalListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { AddressELement, ConvertAddress } from '../../../../models/address.model';
import { ConvertApproval, Product } from '../../../../models/Approval.model';
import { Company, ConvertCompany } from '../../../../models/company.model';
import { FilterDateComponent } from '../../components/filter-date/filter-date.component';
import { FilterDropdownComponent } from '../../components/filter-dropdown/filter-dropdown.component';

@Component({
	selector: 'approval-layout',
	templateUrl: './approval-layout.component.html',
	styleUrls: ['./approval-layout.component.scss'],
})
export class ApprovalLayoutComponent implements OnInit {
	@ViewChild(FilterDropdownComponent)
	filterDropdown: FilterDropdownComponent;
	@ViewChild(FilterDateComponent)
	filterDateDropdown: FilterDateComponent;
	public widgetsContent: ElementRef<any>;

	subsribers: Subscription[];
	items: Product[] = [];
	itemsoriginal: Product[];
	selectedItems: Product[] = [];
	listApprovals: AddressELement[];
	constructor(private route: ActivatedRoute, private service: BaseService) { }
	isEmpty = 0;
	company: Company = null;

	pertotalan = {
		saldo: 0,
		totalPrice: 0,
		totalItem: 0,
		totalFee: 0,
		ppn: 0,
		ppn3: 0,
		ongkir: 0,
		subtotal: 0,
		grandtotal: 0,
	};

	selected;
	selectedIndex;
	pilihSemua = false;
	// items = [
	// 	{
	// 		item: '1',
	// 		available: true,
	// 		cart: true,
	// 	},
	// 	{
	// 		item: '2',
	// 		available: false,
	// 		cart: false,
	// 	},
	// 	{
	// 		item: '3',
	// 		available: true,
	// 		cart: true,
	// 	},
	// ];

	// listApprovals = [
	// 	{
	// 		name: 'Kantor Pusat',
	// 		qty: 10,
	// 	},
	// 	{
	// 		name: 'Kantor Pertama Di Jalan Samudera',
	// 		qty: 8,
	// 	},
	// 	{
	// 		name: 'Kantor Cabang 2',
	// 		qty: 0,
	// 	},
	// 	{
	// 		name:
	// 			'Jl Kompleks Gelora Bung Karno Baru Jaksel No 45, Kebayoran Baru, Jakarta Selatan, DKI Jakarta',
	// 		qty: 0,
	// 	},
	// 	{
	// 		name: 'Kantor Cabang 4',
	// 		qty: 6,
	// 	},
	// 	{
	// 		name: 'Kantor Cabang 5',
	// 		qty: 0,
	// 	},
	// 	{
	// 		name: 'Kantor Cabang 6',
	// 		qty: 2,
	// 	},
	// ];

	handleSelect(selected) {
		this.selected = selected;
		for (var index in this.items) {
			const element: Product = this.items[index];
			if (this.selected == true) {
				this.selected = selected;
				this.selectedItems.push(this.items[index]);
				this.pertotalan.totalPrice += element.purchase_amount;
				this.pertotalan.totalItem += element.quantity;
				this.pertotalan.totalItem += element.admin_fee;
				this.pertotalan.ppn += element.ppn;
				this.pertotalan.ppn3 += element.pph;
				this.pertotalan.ongkir += element.shipping_cost;
				this.pertotalan.subtotal += element.sub_total;
				this.pertotalan.grandtotal += element.grand_total;
			} else {
				this.pertotalan.totalPrice -= element.purchase_amount;
				this.pertotalan.totalItem -= element.quantity;
				this.pertotalan.totalItem -= element.admin_fee;
				this.pertotalan.ppn -= element.ppn;
				this.pertotalan.ppn3 -= element.pph;
				this.pertotalan.ongkir -= element.shipping_cost;
				this.pertotalan.subtotal -= element.sub_total;
				this.pertotalan.grandtotal -= element.grand_total;
			}
		}
	}

	ngOnInit(): void {
		var ls = localStorage.getItem('company');
		this.company = ConvertCompany.toCompany(ls);
		this.pertotalan.saldo = this.company.credit_rp;

		this.handlePilihSemua();
		this.subsribers = [];
		this.route.paramMap.subscribe((params) => {
			this.getAddrass();
			this.getCartItem();

		});
	}

	getAddrass() {
		const sub = this.service
			.getData(AddressListUrl, false, null, true)
			.subscribe((resp) => {

				const stringnya = ConvertAddress.addressToJson(resp);
				const addressList = ConvertAddress.toAddress(stringnya);

				this.listApprovals = addressList.data
				if (addressList.data.length > 0) {
					this.selected = this.listApprovals[0];
				}
			});
	}

	getCartItem() {
		// "user_id": 0,
		// "start_date": "string",
		// 	"end_date": "string",
		var params = {
			"address_id": 21,
			"keyword": "",
			"page": 1,
			"limit": 20
		}
		//  getData(CartListUrl, false, null, true)
		const sub = this.service
			.postData(ApprovalListUrl, params, false, false, true)
			.subscribe((resp) => {
				console.log(resp);
				const stringnya = ConvertApproval.approvalToJson(resp);
				const cartList = ConvertApproval.toApproval(stringnya);
				this.itemsoriginal = cartList.data;

				this.isEmpty = this.itemsoriginal.length;
				if (this.isEmpty > 0) {
					for (
						let index = 0;
						index < this.itemsoriginal.length;
						index++
					) {
						const element: Product = this.itemsoriginal[
							index
						];
						element.available = element.availability == "AVAILABLE";
						if (element.availability == "AVAILABLE") {
							this.selectedItems.push(element);
						}
						this.items.push(element);
						this.pertotalan.totalFee += element.availability == "AVAILABLE" ? 0 : element.admin_fee;
						this.pertotalan.ppn += element.availability == "AVAILABLE" ? 0 : element.ppn;
						this.pertotalan.ppn3 += element.availability == "AVAILABLE" ? 0 : element.pph;
						this.pertotalan.ongkir += element.availability == "AVAILABLE" ? 0 : element.shipping_cost;
						this.pertotalan.totalPrice += element.availability == "AVAILABLE" ? 0 : element.purchase_amount;
						this.pertotalan.totalItem += element.availability == "AVAILABLE" ? 0 : 1;
					}
					this.pertotalan.subtotal =
						this.pertotalan.totalPrice + this.pertotalan.totalFee;
					this.pertotalan.grandtotal =
						this.pertotalan.subtotal +
						this.pertotalan.ppn +
						this.pertotalan.ppn3 +
						this.pertotalan.ongkir;
				}
			});

		this.subsribers.push(sub);
	}


	scrollLeft() {
		this.widgetsContent.nativeElement.scrollTo({
			left: this.widgetsContent.nativeElement.scrollLeft - 150,
			behavior: 'smooth',
		});
		console.log('to the left');
	}

	scrollRight() {
		this.widgetsContent.nativeElement.scrollTo({
			left: this.widgetsContent.nativeElement.scrollLeft + 150,
			behavior: 'smooth',
		});
		console.log('to the right');
	}

	handlePilihSemua() {

		var i,
			n = this.items.length;
		for (i = 0; i < n; ++i) {

			if (this.items[i].available) {
				this.items[i].cart = this.pilihSemua;
				this.selectedItems.push(this.items[i]);

			}
		}
		this.pilihSemua = !this.pilihSemua;
	}

	handlePilihSemuaStatus(): Boolean {
		this.pertotalan = {
			saldo: 0,
			totalPrice: 0,
			totalItem: 0,
			totalFee: 0,
			ppn: 0,
			ppn3: 0,
			ongkir: 0,
			subtotal: 0,
			grandtotal: 0,
		};
		this.pertotalan.saldo = this.company.credit_rp;
		var s = true;

		var i,
			n = this.items.length;
		for (i = 0; i < n; ++i) {
			const element = this.items[i];
			if (this.items[i].available) {
				if (!this.items[i].cart) {
					s = false;
					// this.items[i].available = s;
					break;
				}

				if (s) {
					this.pertotalan.totalPrice += element.purchase_amount;
					this.pertotalan.totalItem += element.quantity;
					this.pertotalan.totalItem += element.admin_fee;
					this.pertotalan.ppn += element.ppn;
					this.pertotalan.ppn3 += element.pph;
					this.pertotalan.ongkir += element.shipping_cost;
					this.pertotalan.subtotal += element.sub_total;
					this.pertotalan.grandtotal += element.grand_total;
				}

			}
			this.items[i].available = s;
		}
		return s;
	}

	isAvailable(element, index, array) {
		return element.available;
	}

	resetButtonOnClick() {
		this.filterDropdown.resetSelected();
		this.filterDateDropdown.resetDate();
	}

	handleCartItem() {
		var s = 0;
		var i,
			n = this.items.length;
		for (i = 0; i < n; ++i) {
			if (!this.items[i].cart) {
				s++;
			}
		}
	}

	cartItem(): any {
		return this.items.filter(this.cartIsTrue);
	}

	countCartItem() {
		return this.cartItem().length;
	}

	cartIsEmpty() {
		return this.countCartItem() == 0;
	}
	cartIsTrue(element, index, array) {
		return element.cart;
	}

	buttonSelanjutnyaLabel() {
		if (this.cartIsEmpty()) {
			return 'Proses';
		} else {
			return 'Proses';
		}
	}
}
