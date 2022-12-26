import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonapiService } from '../service/jsonapi.service';

@Component({
  selector: 'app-jsonapi',
  templateUrl: './jsonapi.component.html',
  styleUrls: ['./jsonapi.component.css']
})
export class JsonapiComponent implements OnInit {

  apiData: any = [];
  
  constructor(private myData: JsonapiService, private router:Router) {
    
      this.myData.getJsonAPI().subscribe((data) => {
        this.apiData = data;
        // console.log(data);
      })
    
    
  }
  
  delete(id:any) {
    this.myData.deleteData(id).subscribe((dt) => {
      return console.log(dt);
      
    })
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
