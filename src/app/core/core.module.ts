import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    WelcomeComponent,
    HeaderComponent,
    SidenavbarComponent
  ]
})
export class CoreModule { }
