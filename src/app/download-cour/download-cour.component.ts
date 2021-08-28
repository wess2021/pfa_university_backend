import { saveAs } from 'file-saver';
import { Cour } from './../cour';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from '../services/cour.service';


@Component({
  selector: 'app-download-cour',
  templateUrl: './download-cour.component.html',
  styleUrls: ['./download-cour.component.css']
})
export class DownloadCourComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private courService:CourService) { }
    file:File;
    cours:any;
     cour:any;
  ngOnInit() {
    this.cour= new Cour();
    this.file=this.route.snapshot.params['file'];
    
    console.log(this.file);
    this.courService.downloadFile({'file':this.file}).subscribe(data=>{  
    saveAs(new Blob([data],{type:'application/octet-stream;charset=utf-8'}),this.file);
    console.log(data);
    })
  }

}
