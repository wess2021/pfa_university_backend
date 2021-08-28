import { DepartementService } from './../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-departement',
  templateUrl: './details-departement.component.html',
  styleUrls: ['./details-departement.component.css']
})
export class DetailsDepartementComponent implements OnInit {
  id:number; departement:any;
  departement_id:number;
  
  info: any;
  constructor(private activedRoute:ActivatedRoute,public depaser:DepartementService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.depaser.getDepartement(this.id).subscribe(data=>{
  console.log(data)
  this.departement=data;
  console.log(this.departement);
 
},error=>console.log(error));}
  }

}

