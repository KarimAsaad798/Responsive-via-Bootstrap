import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';
import { CompaniesComponent } from './companies/companies.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    ProfileComponent,
    StatsComponent,
    CompaniesComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
