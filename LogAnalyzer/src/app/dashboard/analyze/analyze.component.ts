import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RestService } from 'src/app/Services/rest.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  constructor(private rs : RestService, private router : Router , private auth : AuthService) 
  {
    //this.auth.getDashboard()
  }

  arr:any;
  file_format:any;
  response : any;

  displayedColumns: string[] ;
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
      this.response = this.rs.responseData;//this.auth.getResponsedata();
      console.log(this.response)
      this.arr = this.response[0];
      this.file_format = this.response[1];

      this.displayedColumns = this.file_format;
      this.dataSource = new MatTableDataSource(this.arr);
      this.dataSource.paginator = this.paginator;
  }

  getColor(r) {
    console.log(r);
    if(this.displayedColumns.some(x => x === "Level"))
    {
      var s:string = r["Level"].toLowerCase();
      switch (s) {
        case "error":
          return "red";
        case "notice":
          return "green";
        case "fatal":
          return "mark";
        case "info":
          return "blue";
        // default:
        //   return "default";
      }
  }

  else if(this.displayedColumns.some(x => x === "Status"))
    {
      var s:string = r["Status"].toString();
      switch (s) {
        case "200":
          return "green";
        case "404":
          return "red";
        case "403":
          return "mark";
        case "500":
          return "red";
        case "304":
          return "default";
      }
  }
}

}
