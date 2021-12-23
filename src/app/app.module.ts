import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import CaringoDashboardComponent from "./caringo-dashboard/caringo-dashboard.component";
// import { CaringoComponent } from './caringo/caringo.component';

@NgModule({
  declarations: [AppComponent, CaringoDashboardComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
