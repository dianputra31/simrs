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
	@Input() range: string;
	@Input() items_month: any[] = [];
	@Input() items_purchaser: any[] = [];
	@Input() items_product: any[] = [];

	month: any[] = [];
	month_name: any[] = [];
	week_month: any[] = [];
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
			panning: true,
			events: {
				load: function () {
					const chart = this;
					const moveLeft = () => {
						let {
							min,
							max,
							dataMin,
						} = chart.xAxis[0].getExtremes();
						if (min - 1 >= dataMin) {
							min -= 1;
							max -= 1;
						}
						chart.xAxis[0].setExtremes(min, max);
					};
					const moveRight = () => {
						let {
							min,
							max,
							dataMax,
						} = chart.xAxis[0].getExtremes();
						if (max + 1 <= dataMax) {
							min += 1;
							max += 1;
						}
						chart.xAxis[0].setExtremes(min, max);
					};
					const leftArrowUrl =
						'../../../../../assets/image/icons/arrow_left_red.png';
					const rightArrowUrl =
						'../../../../../assets/image/icons/arrow_right_red.png';
					const leftArrow = chart.renderer
						.image(leftArrowUrl, 50, 150, 30, 30)
						.attr({ zIndex: 10 });
					const rightArrow = chart.renderer
						.image(rightArrowUrl, 800, 150, 30, 30)
						.attr({ zIndex: 10 });
					leftArrow.on('click', moveLeft).add();
					rightArrow.on('click', moveRight).add();
				},
			},
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		xAxis: {
			categories: this.month_name,
			max: 3,
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
				groupPadding: 0,
				pointPadding: 0.1,
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
			x: -240,
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
				},
				showInLegend: true,
				size: 250,
				center: ['22%', 170],
			},
		},
		legend: {
			align: 'left',
			margin: 100,
			verticalAlign: 'top',
			layout: 'horizontal',
			y: 100,
			width: 420,
			floating: true,
			x: 400, // = marginLeft - default spacingLeft
			itemWidth: 190,
			borderWidth: 0,
			padding: 3,
			itemMarginTop: 5,
			itemMarginBottom: 5,
			itemStyle: {
				lineHeight: '20px',
			},
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
		colors: [
			'#7805CC',
			'#068343',
			'#F2994A',
			'#C41222',
			'#08B15A',
			'#09DE70',
			'#970AFF',
			'#CB85FF',
			'#580098',
			'#E5C2FF',
			'#08B15A',
			'#C2F7DC',
			'#09DE70',
			'#84EFB8',
			'#DB0A2A',
			'#FBE7EA',
			'#ED667C',
			'#C41222',
			'#AC1A19',
			'#2F80ED',
			'#1B4E91',
			'#EB5757',
			'#CBE0FB',
			'#97C0F6',
			'#2567BF',
			'#FDD276',
			'#C88A04',
			'#E2A117',
			'#FBB829',
			'#FEEBC3',
			'#FCE6D2',
			'#A9550C',
			'#CE772B',
			'#F9CCA5',
			'#F2994A',
		],
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
		if (this.items_month.length === 0) {
			Highcharts.chart('container', this.options);
		} else {
			this.items_month.forEach((item, index) => {
				this.month.push(item.m);
				this.week_month.push(item.wm);
				this.years.push(item.y);
				this.total.push(item.total);
			});

			console.log(this.total);
			for (let i = 0; i < this.total.length; i++) {
				this.totals += this.total[i];
			}

			this.month.forEach((item, i) => {
				if (this.range === 'WEEKLY') {
					if (item === 1) {
						item =
							'Week ' +
							this.week_month[i] +
							' Jan ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 2) {
						item =
							'Week ' +
							this.week_month[i] +
							' Feb ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 3) {
						item =
							'Week ' +
							this.week_month[i] +
							' Mar ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 4) {
						item =
							'Week ' +
							this.week_month[i] +
							' Apr ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 5) {
						item =
							'Week ' +
							this.week_month[i] +
							' Mei ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 6) {
						item =
							'Week ' +
							this.week_month[i] +
							' Jun ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 7) {
						item =
							'Week ' +
							this.week_month[i] +
							' Jul ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 8) {
						item =
							'Week ' +
							this.week_month[i] +
							' Agu ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 9) {
						item =
							'Week ' +
							this.week_month[i] +
							' Sep ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 10) {
						item =
							'Week ' +
							this.week_month[i] +
							' Okt ' +
							this.years[i];
						this.month_name.push(item);
					} else if (item === 11) {
						item =
							'Week ' +
							this.week_month[i] +
							' Nov ' +
							this.years[i];
						this.month_name.push(item);
					} else {
						item =
							'Week ' +
							this.week_month[i] +
							' Des ' +
							this.years[i];
						this.month_name.push(item);
					}
				} else if (this.range === 'MONTHLY') {
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
				}
			});
			console.log('nama bulannya', this.month_name);
			console.log('total', this.total);
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
				data = [item.category, item.total];
				this.product_name.push(data);
			});
			Highcharts.chart('container3', this.chart3);
		}
	}
	getRandomColor() {
		// Array containing colors
		var colors = [
			'#7805CC',
			'#068343',
			'#F2994A',
			'#580098',
			'#09DE70',
			'#970AFF',
			'#CB85FF',
			'#E5C2FF',
			'#08B15A',
			'#C2F7DC',
			'#09DE70',
			'#84EFB8',
			'#DB0A2A',
			'#FBE7EA',
			'#ED667C',
			'#C41222',
			'#AC1A19',
			'#2F80ED',
			'#1B4E91',
			'#EB5757',
			'#CBE0FB',
			'#97C0F6',
			'#2567BF',
			'#FDD276',
			'#C88A04',
			'#E2A117',
			'#FBB829',
			'#FEEBC3',
			'#FCE6D2',
			'#A9550C',
			'#CE772B',
			'#F9CCA5',
			'#F2994A',
		];

		// selecting random color
		for (var i = 0; i <= this.items_purchaser.length; i++) {
			var random_color =
				colors[Math.floor(Math.random() * colors.length)];
		}
		console.log('color', random_color);
		return random_color;
	}

	ngOnChanges(changes: { [propName: string]: SimpleChange }) {
		if (
			changes['items_month'] &&
			changes['items_month'].previousValue !=
				changes['items_month'].currentValue
		) {
			console.log('bulan', this.month);
			console.log('lallala', this.month_name);
			this.totals = 0;
			this.total.length = 0;
			this.month = [];
			this.week_month.length = 0;
			this.month_name.length = 0;
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
