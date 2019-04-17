import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Employee } from '../Employee';
//import { Observable } from 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : Http) { }

  // url : string = "http://localhost:3000/";

  // employeeUrl : string = "http://localhost:3000/Employee/";

  url : string = "https://my-json-server.typicode.com/Manishthakur1297/EmployeeAngular/";

  employeeUrl : string = "https://my-json-server.typicode.com/Manishthakur1297/EmployeeAngular/Employee/";

  UID : any ;

  incrementSalary(id)
  {
    return this.http.get(this.employeeUrl+id)
    .map((response)=>response.json());
  }
  
  getUser(id, role)
  {
    console.log(this.url+role+"/"+id);
    return this.http.get(this.url+role+"/"+id)
    .map((response : any ) => response.json()); 
  }

  updateUser(employee : Employee, id, role)
  {
    return this.http.put(this.url+role+"/"+id,employee)
    .map((response : any ) => response);
  }

  postUser(employee : Employee, role)
  {
    return this.http.post(this.url+role+"/",employee)
    .map((response : any ) => response);
  }

  deleteUser(id, role)
  {
    return this.http.delete(this.url+role+"/"+id)
    .map((response)=>response);
  }

  getAllUsers(role)
  {
    
    return this.http.get(this.url+role)
    .map((response) => response.json());
   
  }


  // setter-------------

  setUID(i)
  {
      this.UID = i;
  }

  getUID(): any
  {
    return this.UID;
  }
}
