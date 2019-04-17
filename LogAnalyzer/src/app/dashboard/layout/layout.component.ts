import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private rs : RestService) { }

  ngOnInit() {
      this.auth.getDashboard();
  }

  logout()
  {
      this.auth.clear();
      this.router.navigate(["./home"]);
  }

}
