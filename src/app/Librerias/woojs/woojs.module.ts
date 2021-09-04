import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';

const modules = [
    CommonModule,
    NgwWowModule
  ];
  @NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
  })
  export class WooJsModule {}