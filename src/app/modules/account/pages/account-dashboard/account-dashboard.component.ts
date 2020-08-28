import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../../assets/canvasjs.min';

@Component({
	selector: 'account-dashboard',
	templateUrl: './account-dashboard.component.html',
	styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// for (var i = 0; i < 7; i++) {
		// 	y += Math.round(5 + Math.random() * (-5 - 5));
		// 	dataPoints.push({ y: y });
		// }

		CanvasJS.addColorSet('greenShades', ['#DB0A2A']);

		let chart = new CanvasJS.Chart('chartContainer', {
			zoomEnabled: true,
			animationEnabled: true,
			exportEnabled: true,
			colorSet: 'greenShades',
			axisY: {
				gridThickness: 0,
			},
			data: [
				{
					type: 'line',
					dataPoints: [
						{ y: 10000000, label: 'July 2020' },
						{ y: 15000000, label: 'Aug 2020' },
						{ y: 17500000, label: 'Sep 2020' },
						{ y: 5000000, label: 'Okt 2020' },
						{ y: 20000000, label: 'Nov 2020' },
						{ y: 25000000, label: 'Des 2020' },
					],
				},
			],
		});

		chart.render();

		CanvasJS.addColorSet('rainbowshades', [
			'#9B51E0',
			'#219653',
			'#F2994A',
		]);

		let chart2 = new CanvasJS.Chart('chartContainer2', {
			zoomEnabled: true,
			animationEnabled: true,
			exportEnabled: true,
			colorSet: 'rainbowshades',
			axisY: {
				gridThickness: 0,
			},

			dataPointWidth: 20,
			data: [
				{
					type: 'bar',
					dataPoints: [
						{ y: 48200000, label: 'Purchaser 9' },
						{ y: 38300000, label: 'Purchaser 6' },
						{ y: 34100000, label: 'Purchaser 3' },
						{ y: 32900000, label: 'Purchaser 10' },
						{ y: 31100000, label: 'Purchaser 2' },
					],
				},
			],
		});

		chart2.render();

		CanvasJS.addColorSet('rainbowshades', [
			'#9B51E0',
			'#219653',
			'#F2994A',
		]);

		let chart3 = new CanvasJS.Chart('chartContainer3', {
			zoomEnabled: true,
			animationEnabled: true,
			exportEnabled: true,
			colorSet: 'rainbowshades',
			axisY: {
				gridThickness: 0,
			},

			dataPointWidth: 20,
			data: [
				{
					type: 'doughnut',
					dataPoints: [
						{ y: 48200000, label: 'Purchaser 9' },
						{ y: 38300000, label: 'Purchaser 6' },
						{ y: 34100000, label: 'Purchaser 3' },
						{ y: 32900000, label: 'Purchaser 10' },
						{ y: 31100000, label: 'Purchaser 2' },
					],
				},
			],
		});

		chart3.render();
	}
}
