import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private router:Router) { }

  login(uname:string, password:string) {
    if(uname == 'admin' && password == '123abc'){
      localStorage.setItem('currentUser', JSON.stringify({username:'admin', name:'Admin Kumar'}))
      this.router.navigate(['/form']);
    } else {
      return 'failed';
    }
  }
}
