import { Component, OnInit } from '@angular/core';
import { Movie } from '../../assets/models/movie';
import { movieArray } from '../../assets/models/movieArray';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent  {


public mov:Movie;
saveMovie(mov:Movie){
  this.mov=mov;

}


}
