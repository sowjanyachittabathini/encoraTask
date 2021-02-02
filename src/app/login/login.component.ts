import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import {LoginAuthService} from "./../login-auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginAuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  showError  =  false;
  constructor( private formBuilder: FormBuilder, private loginAuth: LoginAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControls() { return this.loginForm.controls; }

  
  onSubmit() {
    this.showError = false;
    this.isSubmitted = false;
    if(this.loginForm.valid){
      let cc = this.loginAuth.login(this.loginForm.value.userName,this.loginForm.value.password);
      if(cc){
        this.showError = true;
      }
    } else {
      this.isSubmitted = true;

    }
  }  

}
