import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { EditrecordComponent } from './editrecord/editrecord.component';
import { JsonapiComponent } from './jsonapi/jsonapi.component';

const routes: Routes = [
  {
    path: "",
    component:JsonapiComponent
  },
  {
    path: "addrecord",
    component:AddrecordComponent
  },
  
  {
    path: "update/:id",
    component:EditrecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
