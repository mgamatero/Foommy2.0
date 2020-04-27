import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import{ FoommyService} from './services/foommy.service';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { HeaderComponent } from './page-landing/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
        FormsModule
  ],
  providers: [FoommyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
