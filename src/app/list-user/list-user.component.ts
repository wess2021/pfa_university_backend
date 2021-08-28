import { UserService } from './../services/user.service';
import { TokenStorageService } from './../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  info: any;users:any;profile:any;
 
  constructor(private token: TokenStorageService,private userSer:UserService,private profileser:ProfileService,private router:Router) { }
 

  ngOnInit() {
    this.userSer.getusersList()
    
    .subscribe(data=>{
      this.users=data;

      console.log(this.users);
      
    });
   
    
    this.info = {
     
      
      token: this.token.getToken(),
      username: this.token.getUsername(),
      roles: this.token.getAuthorities()
    };
    console.log(this.info);
  }
 
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  deleteUser(id: number) {  
    console.log(id);
    this.userSer.deleteuser(id).subscribe(  
        data => {  
          console.log(data);  
          this.userSer.getusersList().subscribe(data =>{  
            this.users=data ; 
            })  
        },  
        error => console.log(error));  
  }  
  updateUser(id: number){  
    
          this.router.navigate(['/update-user', id]);
    
  }  
}