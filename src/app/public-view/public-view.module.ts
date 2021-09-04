import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { PerfomanceComponent } from './perfomance/perfomance.component';
import { WooJsModule } from '../Librerias/woojs/woojs.module';
import { AppRoutingModule } from '../app-routing.module';
import { AreasComponent } from './areas/areas.component';
import { PrivateModule } from '../private-view/private.module';
import { SkillListComponent } from './skill-list/skill-list.component';
import { NgxBoostrapModule } from '../Librerias/ng-boostrap/ngb-boostrap.module';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';







@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    PerfomanceComponent,
    AreasComponent,
    SkillListComponent,
    ProyectListComponent,
    ServiceListComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    PrivateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WooJsModule,
    AppRoutingModule,
    NgxBoostrapModule,
  ],
  exports: [WelcomeComponent,SkillListComponent,ProyectListComponent, HeaderComponent]
})
export class PublicViewModule { }
