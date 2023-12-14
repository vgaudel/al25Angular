import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Score } from '../data/score';
import { map , flatMap ,toArray ,filter, mergeMap, reduce, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Calcul } from '../data/calcul';
import { Reponse } from '../data/reponse';

@Injectable({
  providedIn: 'root'
})
export class ScoresDataService {

  constructor(private _http: HttpClient) {
    
  }

  public getScores$(seuil : number) : Observable<Score[]>{

    return this._http.get<Score[]>("http://localhost:8282/scores").pipe(
      mergeMap(sInMyTab=>sInMyTab) ,
      filter((s: Score) => s.bonneReponses >= seuil) ,
      toArray(),
      map(sInMyTab=>sInMyTab.sort((score1,score2)=>score1.bonneReponses-score2.bonneReponses))
    );

  }
  //
  public getNbBonnesReponses$() : Observable<Number>{
    return of(this.genererScores()).pipe(
      
      mergeMap(sInMyTab=>sInMyTab) ,
      tap((score) => console.log(JSON.stringify(score))),
      map((val) => val.bonneReponses),
      reduce((acc,nextScore) => acc + nextScore,0 )
    )
  }

  public genererScores(){

    let myScoreTab : Score[] = [];

    for(let i = 0  ; i<100 ; i++){

      myScoreTab.push(new Score("User"+i,Math.floor(Math.random() * 100),100));

    }
    return myScoreTab;
  }

  public getCalculs$(nbCalcul : number) : Observable<Calcul[]> {

    return this._http.get<Calcul[]>('http://localhost:8282/calcul/'+nbCalcul);

  }

  public postOneCalcul(calcul : Calcul){
    this._http.post<Calcul>('http://localhost:8282/calcul/',
      calcul,
      {headers: {'Content-Type': 'application/json'}}
    ).subscribe(
      {
        next: (tab: Calcul) => { console.log("J'ai reçu la réponse du back "+JSON.stringify(tab)); },
        error: (err: any) => { console.log(err); },
        complete: () => { console.log('complete'); }
      }
    );
      console.log(JSON.stringify(calcul));
  }

}
