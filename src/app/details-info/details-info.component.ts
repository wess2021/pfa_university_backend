import { NoteInfoService } from './../services/note-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css']
})
export class DetailsInfoComponent implements OnInit {
  id:number;
  file:any;

  info: any;

  constructor(private activedRoute:ActivatedRoute,public infoser:NoteInfoService,private router:Router) { }

  ngOnInit() {
    this.id=+this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
    // this.produit= this.bdService.getProduct(this.id);
this.infoser.getInfoid(this.id).subscribe(data=>{
  console.log(data)
  this.info=data;
 
},error=>console.log(error));}
  }
  download3(file:File){
    this.router.navigate(['/download-info', file]);
  }


}