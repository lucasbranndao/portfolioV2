import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './component/home/home.component'
import { SobreComponent } from './component/sobre/sobre.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ExperienciaComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'sobre', component: SobreComponent},
      {path: 'experiencia', component: ExperienciaComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
