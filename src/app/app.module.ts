import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ParallexEffectComponent } from './parallex-effect/parallex-effect.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LegalnoticeComponent,
    ImprintComponent,
    ParallexEffectComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutmeComponent,
    NavbarComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
