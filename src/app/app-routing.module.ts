import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLandingComponent} from './page-landing/page-landing.component';
import {PageWhyfoommyComponent} from './page-whyfoommy/page-whyfoommy.component';
import {PageBecomeAChefComponent} from './page-become-a-chef/page-become-a-chef.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "home", component: PageLandingComponent },
  { path: "whyfoommy", component: PageWhyfoommyComponent },
  { path: "become-a-chef", component: PageBecomeAChefComponent },
  {path: '**',component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
