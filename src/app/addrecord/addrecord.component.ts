import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonapiService } from '../service/jsonapi.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {

  constructor( private apiData:JsonapiService, private router:Router) { }
  

  getAdd(n:any, c:any) {
    var data = { "name": n, "course": c };

    this.apiData.getInsert(data).subscribe((dt) =>{
      return console.log(dt);
      
    }
    )
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
