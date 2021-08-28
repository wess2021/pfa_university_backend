import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  id:number;
 

  user: any;

  constructor(private activedRoute:ActivatedRoute,public userser:UserService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.userser.getUserid(this.id).subscribe(data=>{
  console.log(data)
  this.user=data;
 
},error=>console.log(error));}
  }
 

}