export class Pizza{
    public diameter:number;
    public slices:number;
    public toppings:number;
    public price:number;
    public constructor(){
        this.diameter=Math.round(Math.random()*40+10);
        this.slices=Math.round(Math.random()*5+3);
        this.toppings=Math.round(Math.random()*4);
        this.price=(this.diameter+5*this.toppings)*this.slices;//different from what we were asked to do
    }
}