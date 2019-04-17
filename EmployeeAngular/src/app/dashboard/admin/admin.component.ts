import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private rs : RestService) { }

  ngOnInit() {
  }

  logout()
  {
      this.auth.clear();
      this.router.navigate(["./login"]);
  }

}
