import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  { }

  columns = ["User Id","First Name","Last Name", "Email", "Mobile", "Salary", "Role"];
  index = ["id", "firstName", "lastName", "email", "mobile", "salary","role"];
  account : Employee = new Employee("","","","","","","","");
  empE = [];
  empM = [];

  ngOnInit() {

    this.rs.getAllUsers("Employee")
    .subscribe
    (
      (response)=>
      {
        console.log(response);
        this.empE = response;
        console.log(this.empE[1]);
      },

      (error)=>
      {
        console.log(error);
      }
    )

    this.rs.getAllUsers("Manager")
    .subscribe
    (
      (response)=>
      {
        console.log(response);
        this.empM = response;
        console.log(this.empM[1]);
      },

      (error)=>
      {
        console.log(error);
      }
    )


  }


}
