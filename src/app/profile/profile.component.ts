import { Profile } from './../classes/profile';
import { User } from './../classes/user';
import { UserService } from './../services/user.service';
import { TokenStorageService } from './../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info: any;user:any;profile:any;current:any;
  table_filtre:User[];
  constructor(private token: TokenStorageService,private userSer:UserService,private profileser:ProfileService,private router:Router) { }
 
  ngOnInit() {
       this.info = {
     
      
      token: this.token.getToken(),
      username: this.token.getUsername(),
      roles: this.token.getAuthorities()
     
    };
    console.log(this.info);
    this.userSer.getUserName(this.token.getUsername()).subscribe(a=>{
      this.user=a ;this.table_filtre=this.user;
      console.log(this.user);
      console.log(this.table_filtre);
      this.profileser.getProfileuser_id(this.user.id).subscribe(b=>{
        this.profile=b;
        console.log(this.profile);
       
      });
      
    });
  }
  addProfile(){
    this.router.navigate(['/add-profile']);
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  deleteProfile(id: number) {  
    console.log(id);
    this.profileser.deleteprofile(id).subscribe(  
        data => {  
          console.log(data);  
     
          this.profileser.getprofiles().subscribe(data =>{  
            console.log(data);this.profile =data;this.router.navigate(['profile'])
          
            })  
        },  
        error => console.log(error));  
  }  
  updateProfile(id: number){  
    
          this.router.navigate(['/update-profile', id]);
    
  }  
 
}