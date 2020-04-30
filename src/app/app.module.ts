import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { FoommiesSignedOnComponent } from './page-landing/foommies-signed-on/foommies-signed-on.component';
import { FoommiesNotSignedOnComponent } from './page-landing/foommies-not-signed-on/foommies-not-signed-on.component';
import { PageWhyfoommyComponent } from './page-whyfoommy/page-whyfoommy.component';

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

    ButtonModule
  ],
  providers: [FoommyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
