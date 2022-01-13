import {Component, NgModule, OnInit} from '@angular/core';
import {TokenService} from '../service/token/token.service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ThemePickerModule} from '../shared/theme-picker';
import {MatIconModule} from '@angular/material/icon';
import {NavBarComponent} from '../shared/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userSettings = document.querySelector('.user-settings');
  name: any;
  isCheckLogin = false;
  avatar: any;
  constructor(private tokenService: TokenService,
              private router: Router) {
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isCheckLogin = true;
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
    }
  }
  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }

  UserSettingToggle(): void {
    alert(this.userSettings);
    // @ts-ignore

  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule,
    MatIconModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: []
})
export class NavBarModule {}
