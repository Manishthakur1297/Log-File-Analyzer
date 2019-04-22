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
    //console.log(r);
    if(this.displayedColumns.some(x => x === "Level"))
    {
      var s:string = r["Level"].toLowerCase();
      switch (s) {
        case "error":
          return "danger";
        case "notice":
          return "success";
        case "fatal":
          return "warning";
        case "info":
          return "info";
        case "warn":
          return "warning";
        case "debug":
          return "secondary";
        case "trace":
          return "dark";
      }
  }

  else if(this.displayedColumns.some(x => x === "Status"))
    {
      var s:string = r["Status"].toString();
      switch (s.charAt(0)) {
        case '1':
          return "info";
        case '2':
          return "success";
        case '3':
          return "secondary";
        case '4':
          return "danger";
        case '5':
          return "warning";
      }
  }
}

}
