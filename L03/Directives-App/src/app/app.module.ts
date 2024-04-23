import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BsCardDirective } from './_directives/bs-card.directive';
import { AdCardDirective } from './_directives/ad-card.directive';
import { ConditionFailedDirective } from './_directives/coniditon-failed.directive';

@NgModule({
  declarations: [
    AppComponent,
    BsCardDirective,
    AdCardDirective,
    ConditionFailedDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
