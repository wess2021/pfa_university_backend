import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './auth/token-storage.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
 token:any;
 info: any;
  constructor(private tokenStorage: TokenStorageService,private router:Router) { }


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_MODERATOR') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
  openSlideMenu () {
    document.getElementById('menu').style.width = '200px';
    document.getElementById('content').style.marginLeft = '250px';
    }
     closeSlideMenu () {
      document.getElementById('menu').style.width = '0';
      document.getElementById('content').style.marginLeft = '0';
      }
  logout() {
   
    this.tokenStorage.signOut();

    this.router.navigate(['home']);
  }
  
}

    