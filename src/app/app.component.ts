import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as select2 from 'select2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  json_str =
    {

      '2021-01-15': '10',
      '2021-01-16': '5',
      '2021-01-17': '8',
      '2021-01-18': '9',
      '2019-01-15': '15',
      '2019-01-16': '8',
      '2019-01-17': '12',
      '2019-01-18': '14',
      '2020-01-15': '7',
      '2020-01-16': '4',
      '2020-01-17': '6',
      '2020-01-18': '5',
      '2021-01-10': '20',
      '2021-01-30': '10',
      '2021-01-08': '16',
      '2021-01-25': '18',
      '2021-01-07': '5',
      '2021-01-26': '2',
      '2021-01-21': '4',
      '2023-01-29': '6'

    }
  linechartMethod: any[] = []
  lastThreeMonths: any[] = []


  linechartType: any[] = [
    {
      type: '30Days',
      lineChartLabel: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      lineChartData: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50]
    },
    {
      type: 'lastMonth',
      lineChartLabel: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      lineChartData: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50]
    },
    {
      type: '1year',
      lineChartLabel: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      lineChartData: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50]
    },
    [{
      type: 2020,
      lineChartLabel: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      lineChartData: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15]
    },
    {
      type: 2021,
      lineChartLabel: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      lineChartData: [56, 55, 40, 56, 55, 40, 56, 55, 40, 56, 55, 40]
    },
    {
      type: 2022,
      lineChartLabel: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      lineChartData: [80, 81, 56, 80, 81, 56, 80, 81, 56, 80, 81, 56]
    }]

  ]
  lineChartLabel: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
  lineChartData: number[] = [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 65, 59, 80, 81, 56, 55, 40, 10, 5, 50]

  mixedChartData: any[] = [{
    type: 'bar',
    label: 'Bar Dataset',
    backgroundColor: 'rgba(70,192,192,0.4)',
    data: [10, 20, 30, 40]
  }, {
    type: 'line',
    label: 'Line Dataset',
    backgroundColor: '#3080d0',
    data: [15, 20, 5, 47],
  }]
  mixedchartlabels: string[] = ['January', 'February', 'March', 'April']
  selectedDatatype: any;

  constructor() { }
  ngOnInit() {
    $('.js-example-basic-single').select2();
    const keyDates = Object.keys(this.json_str)
    const currentDate = new Date();
    const currentTime = currentDate.getTime()
    const last30Days = new Date(currentDate.setDate(currentDate.getDate() - 30))
    const last30daytime = last30Days.getTime()
    const lst30Lists = keyDates.filter(x => {
      const listDay = new Date(x).getTime()

      if (listDay <= currentTime && listDay < last30daytime) {
        return true
      }
      return false
    }).sort((a, b) => {
      return new Date(b).valueOf() - new Date(a).valueOf();
    });
    lst30Lists.forEach(element => {
      for (const [key, value] of Object.entries(this.json_str)) {
     
      }

    });
    

  }

  selectBar(datatype: any) {


    this.selectedDatatype = datatype;
    let filterData = this.linechartType.filter(res => res.type === this.selectedDatatype)
    this.lineChartLabel = filterData[0].lineChartLabel
    this.lineChartData = filterData[0].lineChartData
  }

  // selectchange(datatype: any) {
  //   this.linechartType.forEach((res, i) => {
  //     if (i === this.linechartType.length - 1) {
  //       let resultType = res.filter((respons: any) => respons.type == datatype.target.value)
  //       this.lineChartLabel = resultType[0].lineChartLabel
  //       this.lineChartData = resultType[0].lineChartData
  //     }
  //   })
  // }

}
