import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'sobre', component: SobreComponent},
      {path: 'experiencia', component: ExperienciaComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
