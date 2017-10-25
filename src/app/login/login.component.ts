import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../models/UserModel';
import { LoginModel } from '../models/LoginModel';
import { Helpers } from '../helpers/app.helpers';
import { UserService } from '../services/app.user.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserModel;
  loginModel: LoginModel;
  errorMessage: string;
  requiredFiled: string = "Este campo es requerido";
  hide = true;
  hideR = true;
  options: FormGroup;
  validations:{username:boolean,password:boolean} = {
    username:false,
    password:false
  };

  constructor(fb: FormBuilder, private userService: UserService, private router: Router,private help:Helpers) {
    this.options = fb.group({
      hideRequired: false,
      floatPlaceholder: 'always',
    });
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
  }

  validForm() {
    this.validations.username = this.help.isNullOrEmpty(this.loginModel.UserName);
    this.validations.password = this.help.isNullOrEmpty(this.loginModel.Password);
    return this.validations.username && this.validations.password;
  }

  login() {
    debugger;
    if (this.validForm()) {
      this.userService.login(this.loginModel)
        .then((value) => {
          this.userService.setSession(value);
          this.router.navigate(['/Home']);
        })
        .catch((error) => {
          if (error.status == 401) {
            this.errorMessage = "Usuario o contraseña incorrectas.";
          } else {
            this.errorMessage = "Ha ocurrido un error, intente mas tarde.";
          }
        })
    }
  }

}
