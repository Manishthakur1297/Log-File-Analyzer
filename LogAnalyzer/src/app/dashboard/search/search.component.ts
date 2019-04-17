import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private rs : RestService) { }

  arr:any;
  file_format:any;
  file_format1:any;
  res : any;

  ngOnInit() {

    this.res = this.rs.responseData;
    // this.arr = this.response[0];
    this.file_format = this.res[1];
    
  }

  searchQuery(key, col)
  {
    this.rs.searchFile(key, col)
    .subscribe
        (
          (response) => 
          {
            console.log(response);
            this.res = this.rs.responseData;
            // this.arr = this.response[0];
            this.arr = response;
            this.file_format1 = this.res[1];
          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
  }

}
