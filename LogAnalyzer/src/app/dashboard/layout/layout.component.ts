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

  file_name :any;
  response : any;

  ngOnInit() {
    this.response = this.rs.responseData;
    this.file_name = this.response[2];
      this.auth.getDashboard();
  }

  logout()
  {
      this.auth.clear();
      this.router.navigate(["./home"]);
  }

  downloadButtonPush() {
    var csvData = this.ConvertToCSV(this.response[0]);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
  
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, this.file_name+"_structured.csv");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = this.file_name+"_structured.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }


  ConvertToCSV(objArray: any): string {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
        //Now convert each value to string and comma-separated
        row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

}
