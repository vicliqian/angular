import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  passWorld:number;
  constructor() {
    this.userName = 'liqian'
  }

  ngOnInit() {
  }

}
