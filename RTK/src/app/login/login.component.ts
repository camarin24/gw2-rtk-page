import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  hide = true;
  hideR = true;
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatPlaceholder: 'always',
    });
  }

  ngOnInit(): void {
    $("mat-progress-bar").hide()
  }

  login(){
    $("mat-progress-bar").show()
    setTimeout(()=> {
      $("mat-progress-bar").hide()
    },4000)
  }

}
