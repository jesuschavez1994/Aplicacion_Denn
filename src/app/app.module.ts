import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { AboutUsModule } from './about-us/about-us.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfocardsService } from './services/infocard.service';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { PublicViewModule } from './public-view/public-view.module';
import { PrivateModule } from './private-view/private.module';
import { FooterComponent } from './components/footer/footer.component';
import { APP_ROUTING } from 'src/app.routes';
import { InterceptorService } from './services/interceptores/interceptor.service';


// LIBRERIAS //




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    // CarouselModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('G-75KTHT9PMC'),
    ServiceModule,
    AboutUsModule,
    PublicViewModule,
    PrivateModule,
    
    // NgbModule
  ],
  providers: [
    InfocardsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
