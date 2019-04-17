import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs : RestService, private router : Router, private auth : AuthService) { }

  form1;

  ngOnInit()
  {
    this.form1 = new FormGroup
    (
      {
        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        password: new FormControl("", Validators.compose
        (
          [
            Validators.required
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

      role: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        ))
      });

    }
      clickLogin(f)
      {
        
        this.rs.getUser(f.uID,f.role)
        .subscribe
        (
          (response) => 
          {
            console.log(f);
            if(f.password == response.password)
            {
              this.auth.login(f.role);
              this.auth.setId(f.uID);
              //this.auth.setRole(f.role);
              this.router.navigate([""]);
            }
            else
            {
              console.log("User Id and Password do not match...");
              alert("User Id and Password do not match...");
            }
          },
          (error) =>
          {
            console.log("User Id doesn't exist..." + error);
            alert("User Id doesn't exist...");
          }

        )
        console.log(f);
      }

      clickLogout()
      {
        this.auth.logout();
      }
  }
