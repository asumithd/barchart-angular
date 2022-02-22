import { Directive, Input, ElementRef } from '@angular/core';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

@Directive({
  selector: '[appMixedchart]'
})
export class MixedchartDirective {
  mixedChart: any
  @Input() data!: any[];
  @Input() labels:Array<any> = [];

  constructor(private mixedCanvas: ElementRef) {

  }
  ngAfterViewInit(): void {
    this.lineChartBrowser();
  }
  lineChartBrowser(): void {

    this.mixedChart = new Chart(this.mixedCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: this.data,
        labels: this.labels
      }
    });
  }
}
