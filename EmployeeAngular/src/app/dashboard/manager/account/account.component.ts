import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  {
    this.rs.getUser(this.auth.getId(),this.auth.getToken())
    .subscribe
    (
      (response : any) => 
      {
        this.account = response;
        console.log(response);
      },
      (error)=>
      {
        console.log("Error occured while fetching....");
      }
    )
  }

  account : Employee = new Employee("","","","","","","","");

  form3 : FormGroup;
  
  ngOnInit() 
  {
    this.form3 = new FormGroup
    (
      {
        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),


        lname: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        role: new FormControl("", Validators.compose
        (
          [
            
            Validators.required
          ]
        )),

        number: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        email: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        salary : new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        pwd: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        Cpwd: new FormControl("",Validators.compose
        (
          [
              Validators.required
              //PasswordValidation.MatchPassword
          ]
        ))
      });
    

  }
 

    clickUpdate(f)
    {
      console.log(f.number);
      let e1 = new Employee(f.uID, f.fname,f.lname,f.email,f.number,f.role,f.salary,f.pwd);
      console.log(e1);
      
      this.rs.updateUser(e1,f.uID, f.role)
      .subscribe
      (
        (response : any)=>
        {
          alert("Updated Successfully !!");
          this.router.navigate(["./dashboard/"+f.role]);
        }
        ,
        (error) => 
          {
              console.log("Record with id "+f.uID+" does not exists!!!" + error);
              alert("Record with id "+f.uID+" does not exists!!!");
          }
    )
  }

}