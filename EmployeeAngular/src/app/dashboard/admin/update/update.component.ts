import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  { }

  display : boolean = false;
  account : Employee = new Employee("","","","","","","","");

  form3 : FormGroup;
  
  ngOnInit() 
  {
    this.form3 = new FormGroup
    (
      {
        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        fname: new FormControl("", Validators.compose
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

        role : new FormControl("", Validators.compose
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


  getEmployee(id,role)
  {
    this.rs.getUser(id, role).
    subscribe
    (
      (response)=>
      {
        console.log(response);
        this.account = response;
        this.display = true;
      },

      (error)=>
      {
        console.log(error);
        this.display = false;
      }
    )
  }
 

  updateEmployee(f)
    {
      console.log(f.number);
      let c1 = new Employee(f.uID, f.fname, f.lname, f.number,f.email,f.role,f.salary,f.pwd);
      console.log(c1);
      
      this.rs.updateUser(c1, f.uID, f.role)
      .subscribe
      (
        (response : any)=>
        {
          alert("Updated Successfully !!! ");
          //this.rs.setUID(userForm.uID);
          // this.router.navigate([""]);
        }
        ,
        (error) => 
          {
              console.log("Record with id "+f.uID+" doesn't exists!!!" + error);
              alert("Record with id "+f.uID+" doesn't exists!!!");
          }
    )
  }
}