import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  id:number; etudiant:any;
  etudiant_id:number;
  
  info: any;
  constructor(private activedRoute:ActivatedRoute,public etudiantservice:EtudiantService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.etudiantservice.getEtdiant(this.id).subscribe(data=>{
  console.log(data)
  this.etudiant=data;
  console.log(this.etudiant);
 
},error=>console.log(error));}
  }

}
