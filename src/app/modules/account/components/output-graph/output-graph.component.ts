import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
	selector: 'output-graph',
	templateUrl: './output-graph.component.html',
	styleUrls: ['./output-graph.component.scss'],
})
export class OutputGraphComponent implements OnInit {
	subscribers: Subscription[] = [];
	@Input() items_month: any[] = [];
	@Input() items_purchaser: any[] = [];
	@Input() items_product: any[] = [];

	month: any[] = [];
	month_name: any[] = [];
	years: any[] = [];
	total: any[] = [];

	requester_name: any[] = [];
	requester_years: any[] = [];
	requester_total: any[] = [];

	product_name: any[] = [];
	product_total: any[] = [];

	totals: number = 0;

	public options: any = {
		chart: {
			type: 'line',
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			categories: this.month_name,
		},
		yAxis: {
			title: false,
			labels: {
				enabled: false,
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: false,
				},
				enableMouseTracking: false,
			},
		},
		series: [
			{
				name: 'total',
				showInLegend: false,
				cursor: 'pointer',
				data: this.total,
				color: '#FF0000',
				dataLabels: {
					enabled: true,
					formatter: function () {
						return Highcharts.numberFormat(this.y, 0, '.', '.');
					},
				},
			},
		],
	};

	public chart2: any = {
		chart: {
			type: 'bar',
		},
		title: {
			text: '',
		},
		xAxis: {
			categories: this.requester_name,
			title: {
				text: null,
				enabled: false,
			},
			lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent',
			minorTickLength: 0,
			tickLength: 0,
		},
		yAxis: {
			min: 0,
			gridLineWidth: 0,
			title: {
				text: '',
				align: 'high',
			},
			labels: {
				enabled: false,
			},
		},
		tooltip: {
			valueSuffix: '',
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
				},
				showInLegend: false,
			},
			series: {
				borderRadius: 5,
				pointWidth: 10,
			},
		},
		legend: {
			showInLegend: 'false',
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				name: 'total',
				data: this.requester_years,
				dataLabels: {
					enabled: true,
					formatter: function () {
						return Highcharts.numberFormat(this.y, 0, '.', '.');
					},
				},
			},
		],
	};

	public chart3: any = {
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		},
		title: {
			text: 'Pembelian<br>per Produk',
			align: 'center',
			verticalAlign: 'middle',
			y: 15,
			x: -300,
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
				},
				showInLegend: true,
			},
		},
		legend: {
			align: 'right',
			verticalAlign: 'top',
			layout: 'vertical',
			y: 100,
			useHTML: true,
			labelFormatter: function () {
				var legendItem = document.createElement('div'),
					symbol = document.createElement('span'),
					percentage = document.createElement('span'),
					newLine = document.createElement('br'),
					label = document.createElement('span');

				symbol.innerText = Highcharts.numberFormat(this.y, 0, '.', '.');
				symbol.style.borderColor = this.color;
				percentage.innerText = this.percentage.toFixed(2) + '% : ';
				symbol.classList.add('xLegendSymbol');
				label.innerText = this.name;

				legendItem.appendChild(label);
				legendItem.appendChild(newLine);
				legendItem.appendChild(percentage);
				legendItem.appendChild(symbol);
				return legendItem.outerHTML;
			},
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				type: 'pie',
				name: 'persentase',
				innerSize: '60%',
				data: this.product_name,
			},
		],
	};
	constructor() {}

	ngOnInit() {}
	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe());
	}
	graphMonth() {
		console.log('items month', this.items_month);
		var b = this.total.splice(0, this.total.length);
		if (this.items_month.length === 0) {
			Highcharts.chart('container', this.options);
		} else {
			this.items_month.forEach((item, index) => {
				this.month.push(item.m);
				this.years.push(item.y);
				this.total.push(item.total);
			});

			console.log(this.total);
			for (let i = 0; i < this.total.length; i++) {
				this.totals += this.total[i];
			}

			this.month.forEach((item, i) => {
				if (item === 1) {
					item = 'Januari ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 2) {
					item = 'Februari ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 3) {
					item = 'Maret ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 4) {
					item = 'April ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 5) {
					item = 'Mei ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 6) {
					item = 'Juni ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 7) {
					item = 'Juli ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 8) {
					item = 'Agustus ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 9) {
					item = 'September ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 10) {
					item = 'Oktober ' + this.years[i];
					this.month_name.push(item);
				} else if (item === 11) {
					item = 'November ' + this.years[i];
					this.month_name.push(item);
				} else {
					item = 'Desember ' + this.years[i];
					this.month_name.push(item);
				}
			});
			Highcharts.chart('container', this.options);
		}
	}
	graphPurchaser() {
		var data2;
		var b = this.requester_years.splice(0, this.requester_years.length);
		if (this.items_purchaser.length === 0) {
			Highcharts.chart('container2', this.chart2);
		} else {
			this.items_purchaser.forEach((item) => {
				data2 = { y: item.total, color: this.getRandomColor() };
				this.requester_name.push(item.requester_full_name);
				this.requester_years.push(data2);
				this.requester_total.push(item.total);
			});
			Highcharts.chart('container2', this.chart2);
		}
	}
	graphProduct() {
		var b = this.product_name.splice(0, this.product_name.length);
		if (this.items_product.length === 0) {
			Highcharts.chart('container3', this.chart3);
		} else {
			var data;
			console.log('graph product');
			this.items_product.forEach((item) => {
				data = [item.product_name, item.total];
				this.product_name.push(data);
			});
			Highcharts.chart('container3', this.chart3);
		}
	}
	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i <= this.items_purchaser.length; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	ngOnChanges(changes: { [propName: string]: SimpleChange }) {
		if (
			changes['items_month'] &&
			changes['items_month'].previousValue !=
				changes['items_month'].currentValue
		) {
			this.graphMonth();
		}
		if (
			changes['items_purchaser'] &&
			changes['items_purchaser'].previousValue !=
				changes['items_purchaser'].currentValue
		) {
			this.graphPurchaser();
		}
		if (
			changes['items_product'] &&
			changes['items_product'].previousValue !=
				changes['items_product'].currentValue
		) {
			this.graphProduct();
		}
	}
}
