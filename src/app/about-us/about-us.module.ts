import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AboutUsModule { }
