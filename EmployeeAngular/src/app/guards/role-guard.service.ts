import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router : Router, private auth : AuthService) { }

  user : string;

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //throw new Error("Method not implemented.");

    this.user = this.auth.getToken();

    if(this.user == route.data.role)
    {
        return true;
    }

    this.router.navigate(['**']);
    return false;
  }


 
}
