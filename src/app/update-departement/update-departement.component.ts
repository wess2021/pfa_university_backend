import { DepartementService } from './../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Departement } from '../departement';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  id:number;
  departement:any;
  classes:any;
  userfile:any;
  classe:any;

  idcat:number;
  constructor(private router:Router,private route:ActivatedRoute,private deparser:DepartementService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.deparser.getDepartement(this.id).subscribe(data=>{
      console.log(data)
      this.departement=data;
     
    });
  }
 
  onsubmit(f:NgForm){
    let user:Departement=f.value;
   
    console.log(user);
    const formData=new FormData();
    formData.append('user',JSON.stringify(user));
      formData.append('departement_name',user.departement_name);
    this.deparser.updateDepartement(this.id,formData).subscribe(data=>{
      this.departement=data;
      console.log(this.departement);
      this.router.navigate(['list-departement'])
  });}
 

}
