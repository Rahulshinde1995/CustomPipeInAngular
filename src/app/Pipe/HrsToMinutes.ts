import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'hrsToMinutes'
})
export class HrsToMinutes implements PipeTransform{

    transform(size:number){
        return (size*60)+" Min"
    }
}