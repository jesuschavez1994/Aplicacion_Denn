import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [
    CommonModule,
    CarouselModule,
    NgbModule
  ];
  @NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
  })
  export class NgxBoostrapModule {}