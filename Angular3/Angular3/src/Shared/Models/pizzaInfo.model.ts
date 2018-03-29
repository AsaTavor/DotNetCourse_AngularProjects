import { Pizza } from "./pizza.model";

export class PizzaInfo{
    public getPizzas():Array<Pizza>{
        let  arr:Array<Pizza>=new Array<Pizza>(100);
        for(let i=0;i<arr.length;i++){
            arr[i]=new Pizza();
        }
        return arr;
    }
}