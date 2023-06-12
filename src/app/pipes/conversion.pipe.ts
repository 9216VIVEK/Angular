import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [val] =args;
    return value*val;
  }

}
