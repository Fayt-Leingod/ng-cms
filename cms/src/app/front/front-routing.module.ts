import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from "./front.component";

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    data: {
      activeItem: 'home'
    }
  },
  {
    path: 'portfolio',
    component: FrontComponent,
    data: {
      activeItem: 'portfolio'
    }
  },
  {
    path: 'contact',
    component: FrontComponent,
    data: {
      activeItem: 'contact'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
