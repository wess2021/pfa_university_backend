import { EnseignantService } from './../services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.css']
})
export class DetailEnseignantComponent implements OnInit {
  id:number; enseignant:any;
  enseignant_id:number;
  
  info: any;
  constructor(private activedRoute:ActivatedRoute,public enseignantservice:EnseignantService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.enseignantservice.getEnseignant(this.id).subscribe(data=>{
  console.log(data)
  this.enseignant=data;
  console.log(this.enseignant);
 
},error=>console.log(error));}
  }

}

