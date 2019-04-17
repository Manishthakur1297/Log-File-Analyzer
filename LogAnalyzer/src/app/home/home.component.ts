import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { shiftInitState } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs : RestService, private router : Router, private auth : AuthService) { }

  ngOnInit()
  {

  }


  display : boolean = true;

  file:any;
  file_text: any;
  
  arr:any;
  file_format:any;

  fileChanged($event) 
  {
    this.file = $event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (file) => {
      this.file_text = fileReader.result
      //console.log(this.file_text);
    }
    fileReader.readAsText(this.file);
  }

      sendFile(f, format)
      {
        var a = f.split("\\");
        var file_name = a[a.length-1];
        this.rs.readFile(this.file_text, file_name, format)
        .subscribe
        (
          (response) => 
          {
            //console.log(response);
            //this.auth.setResponseData(response)
            this.rs.responseData = response;
            this.auth.setToken("file");
            this.router.navigate(["dashboard"]);
            
          },
          (error) =>
          {
            console.log("File doesn't exist..." + error);
            alert("File doesn't exist...");
          }

        )
      }

  }