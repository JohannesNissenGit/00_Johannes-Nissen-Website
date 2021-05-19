import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ParallexEffectComponent } from './parallex-effect/parallex-effect.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LegalnoticeComponent,
    ImprintComponent,
    ParallexEffectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
