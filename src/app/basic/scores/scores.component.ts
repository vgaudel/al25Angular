import { Component } from '@angular/core';
import { Score } from '../../common/data/score';
import { ScoresDataService } from '../../common/service/scores-data.service';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {

  constructor(private _scoreDataService: ScoresDataService) {

  }


  montrerScores: boolean = false;

  scoreTab: Score[] = [];

  public percentage(score: Score): number {
    return score.bonneReponses / score.nbTotalCalcul * 100;
  }

  public genererScores() {
    this._scoreDataService.getScores$(50)
      .subscribe({
        next: (receivedScoreTab: Score[]) => { this.scoreTab = receivedScoreTab; },
        error: (err: any) => { console.log(err); },
        complete: () => { console.log('complete'); }
      });
    this._scoreDataService.getNbBonnesReponses$()
      .subscribe(
        {
          next: (res: Number) => { console.log(res); },
          error: (err: any) => { console.log(err); },
          complete: () => { console.log('complete'); }
        });
  }
}
