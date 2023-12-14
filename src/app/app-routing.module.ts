import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieComponent } from './basic/serie/serie.component';
import { ScoresComponent } from './basic/scores/scores.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "ngr-serie" , component : SerieComponent},
  {path : "ngr-scores" , component : ScoresComponent},
  {path : "ngr-login" , component : LoginComponent},
  {path : "" , component : AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
