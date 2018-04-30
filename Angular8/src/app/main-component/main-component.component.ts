import { Component, OnInit, OnChanges } from '@angular/core';
import { Data } from '../shared/modules/data.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent{
  public peapleArrayObj:Data=new Data();
  constructor(private http:HttpClient) {
 
    this.http.get(`https://reqres.in/api/users`).subscribe((res)=>{
      this.peapleArrayObj=<Data>res;

        });
    
    
 

   }


}
