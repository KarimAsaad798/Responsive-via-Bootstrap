import { JobsComponent } from './jobs/jobs.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {path:"" , component:HeaderComponent},
  {path:"jobs" , component:JobsComponent}, 
  {path:"profile" , component: ProfileComponent },
  {path:"stats" , component: StatsComponent},
  {path:"companies" , component:CompaniesComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
