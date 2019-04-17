import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private router : Router, private rs : RestService, private auth : AuthService) { }

  emp : Employee = new Employee("", "","","","","","","")

  ngOnInit() {
  }


  logout()
  {
      this.auth.clear();
      this.router.navigate(["./login"]);
  }

}
