import { ClasseService } from './../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-classe',
  templateUrl: './details-classe.component.html',
  styleUrls: ['./details-classe.component.css']
})
export class DetailsClasseComponent implements OnInit {
  id:number; classe:any;
 
  
  info: any;
  constructor(private activedRoute:ActivatedRoute,public classeser:ClasseService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.classeser.getClasse(this.id).subscribe(data=>{
  console.log(data)
  this.classe=data;
  console.log(this.classe);
 
},error=>console.log(error));}
  }

}
