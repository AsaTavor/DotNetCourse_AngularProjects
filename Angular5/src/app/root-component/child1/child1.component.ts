import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../assets/models/movie';
import {movieArray} from '../../../assets/models/movieArray';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

@Output() eE:EventEmitter<Movie>=new EventEmitter<Movie>();
private movArr=movieArray;
 public emitFunc(num:number):void{

  this.eE.emit(movieArray[num-1]);
  }
      
    }
}
