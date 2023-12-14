import { Component } from '@angular/core';
import { Calcul }from '../../common/data/calcul';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.scss'
})
export class SerieComponent {

  isDisabled : boolean = false;

  calculTab : Calcul[] = [{"operator":"/","op1":9,"op2":3},{"operator":"-","op1":1,"op2":7},{"operator":"/","op1":8,"op2":2},{"operator":"/","op1":5,"op2":2},{"operator":"-","op1":6,"op2":9},{"operator":"/","op1":0,"op2":6},{"operator":"/","op1":1,"op2":3},{"operator":"+","op1":7,"op2":9},{"operator":"+","op1":6,"op2":8},{"operator":"/","op1":3,"op2":9},{"operator":"-","op1":5,"op2":3},{"operator":"+","op1":8,"op2":5},{"operator":"+","op1":9,"op2":7},{"operator":"*","op1":8,"op2":5},{"operator":"-","op1":4,"op2":8},{"operator":"/","op1":1,"op2":6},{"operator":"*","op1":4,"op2":3},{"operator":"+","op1":8,"op2":2},{"operator":"-","op1":1,"op2":7},{"operator":"-","op1":1,"op2":4},{"operator":"-","op1":9,"op2":4},{"operator":"/","op1":2,"op2":6},{"operator":"-","op1":4,"op2":1},{"operator":"+","op1":6,"op2":4},{"operator":"/","op1":1,"op2":5},{"operator":"/","op1":3,"op2":6},{"operator":"+","op1":6,"op2":4},{"operator":"+","op1":7,"op2":3},{"operator":"-","op1":2,"op2":8},{"operator":"+","op1":9,"op2":5},{"operator":"-","op1":9,"op2":1},{"operator":"-","op1":2,"op2":5},{"operator":"+","op1":1,"op2":2},{"operator":"*","op1":2,"op2":4},{"operator":"-","op1":5,"op2":6},{"operator":"-","op1":5,"op2":6},{"operator":"/","op1":0,"op2":9},{"operator":"/","op1":4,"op2":7},{"operator":"*","op1":5,"op2":6},{"operator":"+","op1":4,"op2":5},{"operator":"/","op1":1,"op2":6},{"operator":"+","op1":1,"op2":5},{"operator":"/","op1":0,"op2":7},{"operator":"*","op1":5,"op2":3},{"operator":"+","op1":2,"op2":4},{"operator":"*","op1":2,"op2":2},{"operator":"+","op1":3,"op2":3},{"operator":"*","op1":8,"op2":1},{"operator":"*","op1":9,"op2":7},{"operator":"+","op1":9,"op2":9}];

  serieCalculs : Calcul[] = [];

  tailleSerieAff : number = 100;

  public rechargerSerie() : void {
    console.log("Donnée entrée par l'utilisateur : " + this.tailleSerieAff);
    this.serieCalculs = [];
    let decalage = SerieComponent._getRandomInt(50);
    for (let i = 0 ; i< this.tailleSerieAff ; i++){
      this.serieCalculs.push(this.calculTab[(decalage + i)%50]);
    }
  }

  
  
  public calculerOp(calc : Calcul) : number {
    var res = 0;
    if (calc.operator == '+') {
      res = Number(calc.op1) + Number(calc.op2); // le + déclenche une concaténation entre 2 string
      //ou bien une addition entre 2 choses numériques
    } else if (calc.operator == '*') {
      res = calc.op1 * calc.op2;
    } else if (calc.operator == '/') {
      res = Math.floor(calc.op1 / calc.op2)
    } else if (calc.operator == '-') {
      res = calc.op1 - calc.op2;
    }
    return res;
  }
  
  public toString(calc : Calcul) : string {
    return "" + calc.op1 + " " + calc.operator + " " + calc.op2 + " ="
  }
  
    private static _getRandomInt(max : number) : number {
        return Math.floor(Math.random() * max);
    }
    
    private static _getRandomOperator() : string {
        var opInt = Math.floor(Math.random() * 4);
        if (opInt == 0) {
            return "+";
        } else if (opInt == 1) {
            return "*";
        } else if (opInt == 2) {
            return "/";
        } else {
            return "-";
        }
    }
    
    public static getRandomCalcLowLevel() : Calcul {
    
        var calc = new Calcul(this._getRandomOperator(), this._getRandomInt(10), this._getRandomInt(9) + 1)
        return calc;
    }

}

