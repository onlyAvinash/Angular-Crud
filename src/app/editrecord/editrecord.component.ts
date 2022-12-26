import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonapiService } from '../service/jsonapi.service';

@Component({
  selector: 'app-editrecord',
  templateUrl: './editrecord.component.html',
  styleUrls: ['./editrecord.component.css']
})
export class EditrecordComponent implements OnInit {
  newApiData: any = [];
  // id: any;
  name: any;
  course: any;
  constructor(private myData: JsonapiService, private route:ActivatedRoute ,private router:Router) {
  
    var id = this.route.snapshot.paramMap.get("id");

    this.myData.getDataById(id).subscribe((data) => {
      return this.newApiData = data;
    })


  }

  update(id:any,name:any, course:any) {
    
    let data={ "name": name, "course":course};
    this.myData.update(id, data).subscribe((dt) => {
      return console.log(dt);
      
    })
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
