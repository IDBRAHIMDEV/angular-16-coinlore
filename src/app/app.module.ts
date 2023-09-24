import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CoinsModule } from './coins/coins.module';

import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ExchangeListComponent } from './pages/exchange-list/exchange-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ContactComponent,
    PageNotFoundComponent,
    ExchangeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    ChartModule,
    CoinsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
