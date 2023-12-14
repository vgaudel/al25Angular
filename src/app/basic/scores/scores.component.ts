import { Component } from '@angular/core';
import { Score } from '../../common/data/score';
@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {

  montrerScores : boolean = false;

  scoreTab : Score[] = [];

  public percentage(score : Score) : number {
    return score.bonneReponses/score.nbTotalCalcul*100;
  }

  public genererScores(){
    for(let i = 0  ; i<100 ; i++){

      this.scoreTab.push(new Score("User"+i,Math.floor(Math.random() * 100),100));

    }
    console.log(JSON.stringify(this.scoreTab));
  }
  
}

