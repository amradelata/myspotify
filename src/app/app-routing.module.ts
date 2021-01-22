import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from '../app/home/home.component'
import { AccountComponent } from '../app/account/account.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//this is home page
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AccountComponent]