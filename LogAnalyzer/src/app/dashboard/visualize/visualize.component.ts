import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private rs : RestService, private elementRef: ElementRef) { }

  arr:any;
  file_format:any;
  chart_type = [{title : "Line Chart", name : "line"}, {title : "Bar Chart", name : "bar"}, {title : "Pie Chart", name : "pie"}, 
  {title : "Doughnut Chart", name : "doughnut"}]
  //, {title : "Radar Chart", name : "radar"},{title : "Polar Area Chart", name : "polarArea"}];
  res : any;

  file_format1:any;
  display : boolean = false;
  column : any ;

  onChange(item)
  {
    this.barChartType = item;
    this.barChartOptions.title.text = item.toUpperCase()+" Chart";
  }

  onColumnChange(col)
  {
    this.column = col;
    //  this.barChartOptions.scales.xAxes[0].type = this.column;
    
    this.rs.pieChart(col)
    .subscribe
        (
          (response) => 
          {
            this.barChartOptions.scales.xAxes[0].scaleLabel.labelString = col;
            
            console.log(response);
            var keys = response[0];
            var values = response[1];
            this.display = true;
            this.barChartLabels = keys;
            this.barChartData =[
              {data: values, label: col}
            ]

            

          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
  }

  ngOnInit() {

    this.res = this.rs.responseData;
    this.file_format = this.res[1].slice(1);
    this.column = this.file_format[2];
    this.onColumnChange(this.column);
  }

  public barChartOptions = {

    scaleShowVerticalLines: false,
      responsive: true,
      title : {
        display : true,
        position : "top",
        text : "Pie Chart",
        fontSize : 18,
        fontColor : "#111"
      },
      scales: {
        xAxes: [ {
          // type: 'time',
          display: true,
          scaleLabel: {
            display: true,
            labelString: ""
          }
          ,
          ticks: {
            major: {
              fontStyle: 'bold',
              fontColor: 'red'
            }
          }
        } ],
        yAxes: [ {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Count (No of Times ocuured)'
          }
        } ]
      }
    };

  public barChartLabels : any;
  public barChartType : String = "pie";
  public barChartLegend = true;

  // public _backgroundcolors = [{backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37","#566573", "#99a3a4","#dc7633", "#f5b041", "#f7dc6f",
  // "#82e0aa", "#73c6b6","#5dade2", "#a569bd", "#ec7063","#a5754a"]}];
  
  public barChartData : any;

}