import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { MainComponent } from './main/main.component';
import { ParallexEffectComponent } from './parallex-effect/parallex-effect.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'legalnotice', component: LegalnoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
