import { NoteInfoService } from './../services/note-info.service';
import { Component, OnInit } from '@angular/core';
import { NoteInfo } from '../classes/note-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css']
})
export class ListInfoComponent implements OnInit {
  info:NoteInfo=new NoteInfo();
  public  message : any='';
  public infos:any=[];table_filtre:any;
  constructor(private infoser:NoteInfoService,private router: Router) {
   
  }

  ngOnInit() {
    this.infoser.getInfos().subscribe(a =>{
      this.infos= a;this.table_filtre=this.infos;
      console.log(a);
    },err=>{console.log(err)
   }
    )
  }
  editinfo(id:number){
    this.router.navigate(['/update-info', id]);
  }
  deleteinfo(id: number) {  
    console.log(id);
    this.infoser.deleteinfo(id).subscribe(  
        data => {  
          console.log(data);  
          
          this.infoser.getInfos().subscribe(data =>{  
            this.infos =data  
            })  
        },  
        error => console.log(error));  
  }
  filt(a:string){
    return this.infos.filter(x=>x.title.indexOf(a)!=-1);
  }
  set x(a:string){
    this.table_filtre=this.filt(a);
    console.log(a);
  }
  
  download3(file:File){
    this.router.navigate(['/download-info', file]);
  }
  
}
