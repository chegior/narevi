import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PromoComponent } from './components/promo/promo.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServiciosComponent } from './components/servicios/servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MainComponent,
    NavbarComponent,
    NosotrosComponent,
    PromoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
