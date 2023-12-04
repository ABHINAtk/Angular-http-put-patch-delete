import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecordComponent } from './new-record/new-record.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';
import { from } from 'rxjs';

 const routes: Routes = [
  { path: '', component: NewRecordComponent },
  { path: 'fetch-details', component: FetchDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
