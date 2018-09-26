import{Pipe,PipeTransform} from '@angular/core';



@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}


@Pipe({name:'summary'})
export class SummaryPipe implements PipeTransform{
transform(value:string,args:string[]){
    var limit = (args  && args[0])? parseInt(args[0]):50;
    if(value)
    return value.substring(0,limit) + " ...";
}
}