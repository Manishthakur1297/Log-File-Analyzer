import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels : any;
  public barChartType = 'doughnut';
  public barChartLegend = true;

  
  public barChartData : any;

  constructor(private auth : AuthService, private router : Router, private rs : RestService) { }

  arr:any;
  file_format:any;
  file_format1:any;
  res : any;
  display : boolean = false;

  ngOnInit() {

    this.res = this.rs.responseData;
    this.file_format = this.res[1];
    
  }

  pieChartQuery(col)
  {
    this.rs.pieChart(col)
    .subscribe
        (
          (response) => 
          {
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

}

