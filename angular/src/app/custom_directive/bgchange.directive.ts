import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgchange]',
  standalone: true
})
export class BgchangeDirective {

  constructor() { }
@HostBinding("style.BackgroundColor")
bgcolor="yellow";
}
