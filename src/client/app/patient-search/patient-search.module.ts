import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { PatientSearchComponent } from './patient-search.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PatientSearchComponent
  ],
  providers: [

  ]
})
export class PatientSearhModule { }
