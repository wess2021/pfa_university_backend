import { User } from './../classes/user';
import { NgForm } from '@angular/forms';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id:number;
  user:any;
 
  constructor(private router:Router,private route:ActivatedRoute,private userser:UserService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.userser.getUserid(this.id).subscribe(data=>{
      console.log(data)
      this.user=data;
     
    });
  }

  onsubmit(f:NgForm){
    let user2:User=f.value;
   
    console.log(user2);
    const formData=new FormData();
    formData.append('user2',JSON.stringify(user2));
      formData.append('username',user2.username);
      formData.append('email',user2.email);
      formData.append('password',user2.password);
    
    this.userser.updateuser(this.id,formData).subscribe(data=>{
      this.user=data;
      console.log(this.user);
      this.router.navigate(['list-users'])
  });}
 

}
