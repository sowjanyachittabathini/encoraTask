import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AuthGuard} from './auth.guard';
import {NoauthGuard} from './noauth.guard';


const routes: Routes = [
{path: '', component: LoginComponent, canActivate: [NoauthGuard]},
{path: 'form', component: FormComponent, canActivate: [AuthGuard]},
{path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
{path: '**', component: NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
