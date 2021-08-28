import { TokenStorageService } from './../auth/token-storage.service';
import { UserService } from './../services/user.service';
import { NgForm } from '@angular/forms';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../classes/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  profile:Profile=new Profile();
  message:String=" ";
  imagUrl:any;
  imagePath:any;
  users:any;
  user:any;
  public userfile:any=File;
    constructor(private profileService:ProfileService,private router:Router,private userSer:UserService,private token: TokenStorageService) { }
    
    ngOnInit() {
     
    this.userSer.getUserName(this.token.getUsername()).subscribe(a=>{
      this.user=a ;
      console.log(this.user);
   
    });
      this.userSer.getusersList().subscribe(data=>{
        this.users=data;
        console.log(this.users);
      });
    }
    onsubmit(f:NgForm) { 
      
      let profile:Profile=f.value;
 
    console.log(profile);
    const formData=new FormData();
    formData.append('profile',JSON.stringify(profile));
    formData.append('id',this.user.id);
    formData.append('adresse',profile.adresse);
    formData.append('birthday',profile.birthday);
    formData.append('gender',profile.gender);
    formData.append('phone_number',profile.phoneNumber);
    formData.append('file',this.userfile);
    this.profileService.SaveProfileProfile(formData).subscribe(data =>
       (console.log(data),this.router.navigate(['profile'])));  
    
    }
  onSelectFile(event){
    const file=event.target.files[0];
    console.log(file);
    this.userfile=file;
   
  }
  
}

