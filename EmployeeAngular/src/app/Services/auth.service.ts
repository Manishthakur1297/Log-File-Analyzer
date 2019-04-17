import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  layout : string; 
  id : string;

  constructor(private _router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  getId()
  {
    return localStorage.getItem('id');
  }

  setId(i)
  {
    localStorage.setItem('id', i);
  }

  getDashboard()
  {
    this.layout  = localStorage.getItem('token');
    this._router.navigate(['/dashboard/' + this.layout]);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  login(role): void {
    localStorage.setItem('token', role);

    this._router.navigate(['/dashboard/'+role]);
  }

  logout(): void {
    this.clear();
    this._router.navigate(['/login']);
  }

}



  // loginAdmin(): void {
  //   localStorage.setItem('token', `admin`);

  //   this._router.navigate(['/dashboard/admin']);
  // }

  // loginEmployee(): void {
  //   localStorage.setItem('token', `employee`);

  //   this._router.navigate(['/dashboard/employee']);
  // }

  // loginManager(): void {
  //   localStorage.setItem('token', `manager`);

  //   this._router.navigate(['/dashboard/manager']);
  // }