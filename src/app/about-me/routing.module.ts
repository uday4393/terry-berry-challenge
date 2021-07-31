import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyInfoComponent } from './components/my-info/my-info.component';


const routes: Routes = [{
  path: 'my-info',
  component: MyInfoComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

