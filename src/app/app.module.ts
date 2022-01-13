import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { NotificationComponent } from './notification/notification.component';
import { PostingComponent } from './posting/posting/posting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {CardComponent} from './posting/posting/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment.prod';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import { ChangeAvatarComponent } from './change/change-avatar/change-avatar.component';
import { LoginComponent } from './form-login/login/login.component';
import { LogoutComponent } from './form-login/logout/logout.component';
import { RegisterComponent } from './form-login/register/register.component';
import { UserAccountComponent } from './form-login/user-account/user-account.component';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatIconModule} from '@angular/material/icon';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {PostingListComponent} from './posting/posting/posting-list/posting-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponent,
    NotificationComponent,
    PostingComponent,
    CardComponent,
    ChangeAvatarComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UserAccountComponent,
    UploadAvatarComponent,
    PostingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
