import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLandingComponent} from './page-landing/page-landing.component';
import {PageWhyfoommyComponent} from './page-whyfoommy/page-whyfoommy.component';
import {PageBecomeAChefComponent} from './page-become-a-chef/page-become-a-chef.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {PageNotLoggedChefDetailsComponent} from './page-not-logged-chef-details/page-not-logged-chef-details.component';
import {PageNotLoggedDishDetailsComponent} from './page-not-logged-dish-details/page-not-logged-dish-details.component';
import {PageTermsOfServiceComponent} from './page-terms-of-service/page-terms-of-service.component';
import {PagePrivacyPolicyComponent} from './page-privacy-policy/page-privacy-policy.component';


const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "home", component: PageLandingComponent },
  { path: "whyfoommy", component: PageWhyfoommyComponent },
  { path: "become-a-chef", component: PageBecomeAChefComponent },
  { path: "sample-foomy/:id", component: PageBecomeAChefComponent },
  { path: "nonLoggedChefDetails/:id", component: PageNotLoggedChefDetailsComponent },
  { path: "nonLoggedDishDetails/:chefId/:dishId", component: PageNotLoggedDishDetailsComponent },
  { path: "termsOfService", component: PageTermsOfServiceComponent },
  { path: "privacyPolicy", component: PagePrivacyPolicyComponent },
  {path: '**',component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],  //top of page for each route
  exports: [RouterModule]
})
export class AppRoutingModule { }
