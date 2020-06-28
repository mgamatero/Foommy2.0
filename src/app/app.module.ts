import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { PageLandingComponent } from './page-landing/page-landing.component';
import { HeaderComponent } from './page-landing/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HowFoomyComponent } from './page-landing/how-foomy/how-foomy.component';
import { FeedbackComponent } from './page-landing/feedback/feedback.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { FoommiesComponent } from './page-landing/foommies/foommies.component';
import { PageWhyfoommyComponent } from './page-whyfoommy/page-whyfoommy.component';
import { PageBecomeAChefComponent } from './page-become-a-chef/page-become-a-chef.component';

import { PageFoommyDetailsComponent } from './page-foommy-details/page-foommy-details.component';
import { PageDishDetailsComponent } from './page-dish-details/page-dish-details.component';
import { PageTermsOfServiceComponent } from './page-terms-of-service/page-terms-of-service.component';
import { PagePrivacyPolicyComponent } from './page-privacy-policy/page-privacy-policy.component';
import { PageBecomeAChefFormComponent } from './page-become-a-chef-form/page-become-a-chef-form.component';
import { PageLoginComponent } from './page-login/page-login.component';

import { FoommyService } from './services/foommy.service';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { PageRegisterComponent } from './page-register/page-register.component';


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
    FoommiesComponent,
    PageWhyfoommyComponent,
    PageBecomeAChefComponent,
    PageFoommyDetailsComponent,
    PageDishDetailsComponent,
    PageTermsOfServiceComponent,
    PagePrivacyPolicyComponent,
    PageBecomeAChefFormComponent,
    PageLoginComponent,
    PageRegisterComponent,
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
    CardModule,
    MessageModule,
    MessagesModule
  ],
  providers: [FoommyService, AuthService, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
