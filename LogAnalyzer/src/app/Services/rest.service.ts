import { Injectable, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { AuthGuard } from '../guard/auth-guard.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http : Http, private auth : AuthService) { }

  ngOnInit()
  {
    
  }

  responseData : any;

  columnData : any;

  readUrl : string = "http://127.0.0.1:5000/readFile/";
  searchUrl : string = "http://127.0.0.1:5000/search?key1=";
  sortUrl : string = "http://127.0.0.1:5000/sort?key1=";
  visualizeUrl : string = "http://127.0.0.1:5000/visualize";
  pieChartUrl : string = "http://127.0.0.1:5000/pieChart?key1=";

  readFile(file_text, file_name, format)
  {
    console.log(file_name);
    console.log(format);
    //console.log(file_text);
    let arr = [file_name, format, file_text] 
    return this.http.post(this.readUrl,arr)
    .map((response : any ) => response.json()); 
  }

  searchFile(key, col)
  {
    return this.http.get(this.searchUrl+key+"&key2="+col)
    .map((response : any ) => response.json()); 
  }

  sortFile(col)
  {
    return this.http.get(this.sortUrl+col)
    .map((response : any ) => response.json()); 
  }

  visualizeFile()
  {
    return this.http.get(this.visualizeUrl)
    .map((response : any ) => response.json()); 
  }

  
  pieChart(col)
  {
    return this.http.get(this.pieChartUrl+col)
    .map((response : any ) => response.json()); 
  }
}
