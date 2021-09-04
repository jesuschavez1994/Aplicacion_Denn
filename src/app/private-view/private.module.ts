import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileComponent } from './shared/header-profile/header-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StreamingComponent } from './videos/streaming/streaming.component';
import { VideoComponent } from './videos/video/video.component';





@NgModule({
  declarations: [
    HeaderProfileComponent,
    StreamingComponent, 
    VideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [HeaderProfileComponent]
})
export class PrivateModule { }
