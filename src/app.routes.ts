import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { SkillListComponent } from './app/public-view/skill-list/skill-list.component';
import { WelcomeComponent } from './app/public-view/home/welcome.component';
import { LoginComponent } from './app/public-view/login/login.component';
import { ProyectListComponent } from './app/public-view/proyect-list/proyect-list.component';
import { ServiceListComponent } from './app/public-view/service-list/service-list.component';
import { ContactFormComponent } from './app/public-view/contacts/contact-form/contact-form.component';
import { StreamingComponent } from './app/private-view/videos/streaming/streaming.component';
import { VideoComponent } from './app/private-view/videos/video/video.component';




const APP_ROUTES: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'skills', component: SkillListComponent},
    {path: 'contact', component: ContactFormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'trasmision', component: ProyectListComponent},
    {path: 'about-us', component: AboutUsComponent },
    {path: 'modulacion', component: ServiceListComponent },
    {path: 'video', component: StreamingComponent },
    {path: 'videos', component: VideoComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'welcome'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
