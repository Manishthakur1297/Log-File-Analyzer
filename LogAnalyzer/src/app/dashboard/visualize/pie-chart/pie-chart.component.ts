import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

    
  rD : Array<Number>; 
   l : any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels : any;
  public barChartType = 'line';
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

