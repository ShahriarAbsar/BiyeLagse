import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeddingComponent } from './wedding/wedding.component';
import { HoludComponent } from './holud/holud.component';
import { ReceptionComponent } from './reception/reception.component';

const routes: Routes = [

 
    { path: '', component: LandingPageComponent },
    { path: 'wedding', component: WeddingComponent },
    { path: 'holud', component: HoludComponent },
    { path: 'reception', component: ReceptionComponent },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
