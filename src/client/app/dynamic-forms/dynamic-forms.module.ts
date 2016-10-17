import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionControlService } from './question-control.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    QuestionControlService
  ]
})

export class DynamicFormsModule { }
