import { Component, OnInit } from '@angular/core';
import {VegList} from './../../assets/modules/vegtabels'
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
  

export class CompComponent {
  public flag1: boolean = false;
  public flag2: boolean = false;
  public letter: string = "";
  public arrToShow: Array<string> = new Array<string>(0);
  public submit() {
    if (this.letter.length == 1 && isNaN(Number(this.letter))){
      this.arrToShow = [];
      
      for (let x of VegList.vegList) {
        if (x.indexOf(this.letter) == 0)
          this.arrToShow.push(x);
      }
      if(this.arrToShow.length!=0){
      this.flag1 = true;
      this.flag2 = false;}
    }
    else {
      this.flag1 = false;
      this.flag2 = true;

    }
  }

}
