import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {  FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login;
  
  forLog(val) {
    if (val.uname == "admin" && val.pass == "admin" ) {
      this.route.navigate(['admin-panel']);
    }
      else {
       alert('invalid user name or password');
     }

  }

  constructor(public route: Router) { }
  ngOnInit(){
    this.login = new FormGroup({
      uname: new FormControl(),
      pass: new FormControl()
     });
  }

}
