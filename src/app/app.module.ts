import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureEnablerDirective } from './feature-enabler.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeatureEnablerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
