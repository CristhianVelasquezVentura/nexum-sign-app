import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "@app/modules/authentication/pages/login/login.component";
import {RecoveryComponent} from "@app/modules/authentication/pages/recovery/recovery.component";
import {RestartPasswordComponent} from "@app/modules/authentication/pages/restart-password/restart-password.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: 'restart-password',
    component: RestartPasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AuthenticationRoutingModule {
}
