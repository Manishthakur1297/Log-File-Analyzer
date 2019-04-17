import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
      this.response = this.rs.responseData;//this.auth.getResponsedata();
      console.log(this.response)
      this.arr = this.response[0];
      this.file_format = this.response[1];
  }

}
