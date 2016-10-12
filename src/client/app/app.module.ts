import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { ClinicDashboardModule } from './clinic-dashboard/clinic-dashboard.module';
import { PatientDashboardModule } from './patient-dashboard/patient-dashboard.module';
import { PatientSearhModule } from './patient-search/patient-search.module';
import { dashboardRouting } from './main-dashboard/main-dashboard-routing';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule,
    SharedModule.forRoot(),
     PatientSearhModule, 
     PatientDashboardModule,
  MainDashboardModule,
  ClinicDashboardModule],
  declarations: [AppComponent, LoginComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
