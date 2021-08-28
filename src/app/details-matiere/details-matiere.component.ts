import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-details-matiere',
  templateUrl: './details-matiere.component.html',
  styleUrls: ['./details-matiere.component.css']
})
export class DetailsMatiereComponent implements OnInit {
  id:number; matiere:any;
  matiere_id:number;
  
  info: any;
  constructor(private activedRoute:ActivatedRoute,public matser:MatiereService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.matser.getMatiere(this.id).subscribe(data=>{
  console.log(data)
  this.matiere=data;
  console.log(this.matiere);
 
},error=>console.log(error));}
  }

}

