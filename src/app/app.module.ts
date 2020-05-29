import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { FoommyService } from './services/foommy.service';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { HeaderComponent } from './page-landing/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HowFoomyComponent } from './page-landing/how-foomy/how-foomy.component';
import { FeedbackComponent } from './page-landing/feedback/feedback.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";

import { FoommiesSignedOnComponent } from './page-landing/foommies-signed-on/foommies-signed-on.component';
import { FoommiesNotSignedOnComponent } from './page-landing/foommies-not-signed-on/foommies-not-signed-on.component';
import { PageWhyfoommyComponent } from './page-whyfoommy/page-whyfoommy.component';
import { PageBecomeAChefComponent } from './page-become-a-chef/page-become-a-chef.component';

import{NonLoggedOnDataService} from './services/non-logged-on-data.service';
import { NotLoggedSampleFoommyComponent } from './not-logged-sample-foommy/not-logged-sample-foommy.component';
import { PageNotLoggedChefDetailsComponent } from './page-not-logged-chef-details/page-not-logged-chef-details.component';
import { PageNotLoggedDishDetailsComponent } from './page-not-logged-dish-details/page-not-logged-dish-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    PageNotfoundComponent,
    HowFoomyComponent,
    FeedbackComponent,
    FoommiesSignedOnComponent,
    FoommiesNotSignedOnComponent,
    PageWhyfoommyComponent,
    PageBecomeAChefComponent,
    NotLoggedSampleFoommyComponent,
    PageNotLoggedChefDetailsComponent,
    PageNotLoggedDishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    ButtonModule,
    CardModule
  ],
  providers: [FoommyService, NonLoggedOnDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
