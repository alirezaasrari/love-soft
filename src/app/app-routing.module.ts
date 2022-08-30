import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContentComponent } from './content/content.component';
import { listViewComponent } from './content/list-view/list-view.component';

const routes: Routes = [
  {
    path: 'loginresult',
    component: LandingComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'list-view',
    component: listViewComponent
  },
  {
    path: 'card-view',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
