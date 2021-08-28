import { TokenStorageService } from './../auth/token-storage.service';
import { UserService } from './../services/user.service';
import { Profile } from './../classes/profile';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  profile:any;
  profiles:any;
  message:String=" ";
  id:number;
  imagUrl:any;
  imagePath:any;
  users:any;
  user:any;
  public userfile:any=File;
    constructor(private profileService:ProfileService,private router:Router,private userSer:UserService,private route:ActivatedRoute,private token:TokenStorageService) { }
    
    ngOnInit() {

      this.id=this.route.snapshot.params['id'];
      this.profileService.getProfileid(this.id).subscribe(data=>{
        console.log(data)
        this.profile=data;
      
      });
       
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
      
      let profiles:Profile=f.value;
 
    console.log(profiles);
    const formData=new FormData();
    formData.append('profiles',JSON.stringify(profiles));
    formData.append('id',this.user.id);
    formData.append('adresse',profiles.adresse);
    formData.append('birthday',profiles.birthday);
    formData.append('gender',profiles.gender);
    formData.append('phone_number',profiles.phoneNumber);
    formData.append('file',this.userfile);
    this.profileService.update(this.id,formData).subscribe(data =>
       (console.log(data),this.router.navigate(['profile'])));  
    
    }
  onSelectFile(event){
    const file=event.target.files[0];
    console.log(file);
    this.userfile=file;
   
  }
  
}

