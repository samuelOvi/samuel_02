import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CardComponent } from "./card/card.component";
const routes: Routes = [
  {
    path:'descripcion/:id',
    component:DescripcionComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'',
    redirectTo:'card',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
