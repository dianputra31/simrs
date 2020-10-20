import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./output-graph.component.scss']
})
export class OutputGraphComponent implements OnInit {
  public options: any = {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Pembelian Perusahaan'
      },
      xAxis: {
          categories: ['Jul 2020', 'Ags 2020', 'Sept 2020', 'Okt 2020', 'Nov 2020', 'Des 2020']
      },
      yAxis: {
        title: false,
        labels: {
          enabled: false
      }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          showInLegend: false,
          cursor: 'pointer',
          data: [10000000,15000000,17500000,5000000,20000000,25000000],
          color: '#FF0000'
      }]
  }

  public chart2: any = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Pembelian per User'
  },
  xAxis: {
      categories: ['Purchaser 9', 'Purchaser 6', 'Purchaser 3', 'Purchaser 10', 'Purchaser 2'],
      title: {
          text: null,
          enabled: false
      },
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0
  },
  yAxis: {
      min: 0,
      gridLineWidth: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
        enabled: false
    },
  },
  tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      },
      series:{
        borderRadius: 5,
        pointWidth: 10
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1800',
      data: [{
        y:300,
        color:'purple'
      },
      {
        y:1200,
        color: 'green'
      },
      {
        y:800,
        color: 'orange'
      },
      {
        y:900,
        color: 'purple'
      },
      {
        y:450,
        color: 'red'}],
  }]
}

  public chart3: any = {
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
      text: 'Pembelian<br>per Produk',
      align: 'center',
      verticalAlign: 'middle',
      y: 0,
      x: -90
  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      y: 100,
      useHTML: true,
      labelFormatter: function() {
        var legendItem = document.createElement('div'),
            symbol = document.createElement('span'),
            label = document.createElement('span');

        symbol.innerText = this.y.toFixed(2);
        symbol.style.borderColor = this.color;
        symbol.classList.add('xLegendSymbol');
        label.innerText = this.name;

        legendItem.appendChild(symbol);
        legendItem.appendChild(label);

        return legendItem.outerHTML;
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '60%',
      data: [
        ['Chrome', 58.9],
        ['Firefox', 33.29],
        ['Internet Explorer', 13]
      ]
    }]
  }
  subscription: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
    Highcharts.chart('container2', this.chart2);
    Highcharts.chart('container3', this.chart3);
    // this.getSummaryMonth();
    // this.getSummaryPurchaser();
    // this.getSummaryProduct();
  }
  }

