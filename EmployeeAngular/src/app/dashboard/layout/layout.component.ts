import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  layout : boolean = this.auth.isAuthenticated();

  constructor(private auth : AuthService) 
  { 
    this.auth.getDashboard();
  }


  ngOnInit() {
    this.auth.getDashboard();
    
    // if(this.auth.isAuthenticated())
    // {
    //   this.auth.getDashboard();
    // }
    // else
    // {
    //   this.auth.logout();
    // }
  }

}
