import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLandingComponent} from './page-landing/page-landing.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "home", component: PageLandingComponent },
  {path: '**',component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
