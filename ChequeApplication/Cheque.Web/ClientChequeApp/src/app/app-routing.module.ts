import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateChequeComponent } from './home/generate-cheque/generate-cheque.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'chequeDetail', component: GenerateChequeComponent},
  { path: 'chequeDetail/:id', component: GenerateChequeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
