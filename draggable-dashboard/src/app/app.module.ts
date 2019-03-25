import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgDraggableWidgetModule } from 'ngx-draggable-widget';
import { TooltipModule } from 'ngx-tooltip';
import { SimpleMarketComponent } from './simple-market/simple-market.component';
import { ComplexMarketComponent } from './complex-market/complex-market.component';
import { MatToolbarModule } from '@angular/material';
import 'hammerjs';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMarketComponent,
    ComplexMarketComponent
  ],
  imports: [
    NgDraggableWidgetModule,
    TooltipModule,
    MatToolbarModule,
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
