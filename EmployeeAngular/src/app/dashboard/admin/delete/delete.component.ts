import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router, private rs : RestService, private auth : AuthService) 
  { }

  ngOnInit() {
  }

  deleteEmployee(id, role)
  {
    this.rs.deleteUser(id, role)
    .subscribe
    (
      (response)=>
      {
        console.log("Deleted Successfully!!");
        alert("Deleted Successfully!!");
      },

      (error)=>
      {
        console.log("Sorry! Employee doesn't exist....");
        alert("Sorry! Employee doesn't exist....");
      }

    )
  }

}
