import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  layout : string; 
  constructor(private _router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  getDashboard()
  {
    this._router.navigate(['/dashboard/analyze']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  setToken(token): void {
    localStorage.setItem('token', token);
    this._router.navigate(['/dashboard/']);
  }

  setResponseData(res)
  {
    localStorage.setItem('responseData', res)
  }

  getResponsedata()
  {
    return localStorage.getItem('responseData');
  }

  logout(): void {
    this.clear();
    this._router.navigate(['/home']);
  }

}