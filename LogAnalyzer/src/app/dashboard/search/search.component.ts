import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private rs : RestService, private router : Router , private auth : AuthService) 
  {
    //this.auth.getDashboard()
  }


  arr:any;
  file_format:any;
  response : any;
  display : boolean = false;

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


  searchQuery(key, col)
  {
    this.rs.searchFile(key, col)
    .subscribe
        (
          (response) => 
          {
            console.log(response);
            //this.res = this.rs.responseData;
            // this.arr = this.response[0];
            this.arr = response;
            this.displayedColumns = this.file_format;
            this.dataSource = new MatTableDataSource(this.arr);
            this.dataSource.paginator = this.paginator;
            this.display = true;
            //this.file_format1 = this.res[1];
          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
  }

}
