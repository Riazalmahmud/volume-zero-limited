import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    CarouselModule,
    AngularSvgIconModule.forRoot(),
  ]
})
export class HomeModule { }
