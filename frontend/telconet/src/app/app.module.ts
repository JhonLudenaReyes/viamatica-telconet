import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { LandingModule } from './landing/landing.module';
import { UserModule } from './user/user.module';
import { RefreshDirective } from './directives/refresh.directive';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [AppComponent, RefreshDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    LandingModule,
    NavigationModule,
    PersonModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
