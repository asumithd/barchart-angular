import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)
@Directive({
  selector: '[appLinechart]'
})
export class LinechartDirective implements AfterViewInit {

  lineChart: any
  @Input() data!: number[] | Array<number[]>;
  @Input() labels: Array<any> = [];

  constructor(private lineCanvas: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.data){
      this.lineChartBrowser();
    }
  }

  ngAfterViewInit(): void {
    this.lineChartBrowser();
  }


  lineChartBrowser(): void {
    if (this.lineChart) this.lineChart.destroy();

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.data,
            spanGaps: false,
          }
        ]
      }
    });
    
  }
}
