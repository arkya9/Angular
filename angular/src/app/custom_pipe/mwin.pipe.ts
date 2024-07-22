import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mwin',
  standalone: true
})

export class MwinPipe implements PipeTransform {

  transform(value: unknown, country:string): unknown {
    let objectDate = new Date();
    return `MWIN${value}${objectDate.getFullYear()}${country.toUpperCase()}`;
  }

}
