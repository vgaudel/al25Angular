import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { SerieComponent } from './basic/serie/serie.component';
import { ScoresComponent } from './basic/scores/scores.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './login/registered/registered.component';
import { UnregisteredComponent } from './login/unregistered/unregistered.component';
import { LogInOutService } from './common/service/log-in-out.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    SerieComponent,
    ScoresComponent,
    AccueilComponent,
    LoginComponent,
    RegisteredComponent,
    UnregisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    LogInOutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
