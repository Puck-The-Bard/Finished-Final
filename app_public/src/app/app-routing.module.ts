import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarsDatComponent } from './mars-dat/mars-dat.component';


const routes: Routes = [
  { path: '', component: MarsDatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
