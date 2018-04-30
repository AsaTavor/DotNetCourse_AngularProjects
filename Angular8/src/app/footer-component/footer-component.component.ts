import { Component, OnInit } from '@angular/core';
import { Strings } from '../shared/services/strings.service';


@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  public designer:string="";
  public designer2:string="";
  
  public index:number=0;
  public index2:number=0;
  public index3:number=3;
  public flag1=false;
  public intervalPointer:any;
  constructor(private stringsServices:Strings) {
    this.designer=this.stringsServices.stringArray[this.index];
    this.designer2=this.stringsServices.stringArray[this.index3];
    
    this.intervalPointer=setInterval(()=>{
      if(this.index==2)  
      {
        this.index=0;
        this.designer="";
      }
      else 
      {
        this.index=this.index+1;
        this.index2=this.index2+2;
      }
      if(this.index3==13)
      {
        this.index3=0 ;
        this.designer2="";
      }
      if(this.index3==12) 
      {
        this.index3=13;
        this.designer2="";
      }
      else 
      {
        this.index3=this.index3+1;
      }  
      if (this.index2==50) 
      {
        clearInterval(this.intervalPointer);
      }
      this.designer+=" "+this.stringsServices.stringArray[this.index];
      this.designer2+=" "+this.stringsServices.stringArray[this.index3];
      if (this.index==2) this.flag1=true;
      else this.flag1=false;
    },2000);
    
   }

  ngOnInit() {


  }

}

