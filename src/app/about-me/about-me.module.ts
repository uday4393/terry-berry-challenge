import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyInfoComponent } from './components/my-info/my-info.component';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule
  ]
})
export class AboutMeModule { }
