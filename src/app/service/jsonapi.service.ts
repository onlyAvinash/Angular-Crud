import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonapiService {

  constructor(private apiservice: HttpClient) { }
  
  getJsonAPI(){
    return this.apiservice.get("http://localhost:3000/students");
    
   }
  getInsert(data:any){
    return this.apiservice.post("http://localhost:3000/students",data);
    
   }
  deleteData(id:any){
    return this.apiservice.delete("http://localhost:3000/students"+"/"+id);
    
  }
  
  getDataById(id:any) {
    return this.apiservice.get("http://localhost:3000/students"+"/"+id);
    
  }
  update(id:any,data:any) {
    return this.apiservice.put(`http://localhost:3000/students/${id}`,data);
    
  }
  
}
