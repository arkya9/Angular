import { Directive, HostBinding, HostListener } from '@angular/core';
import {  ElementRef } from '@angular/core';
@Directive({
  selector: '[appNewDirective]',
  standalone: true
})
export class NewDirectiveDirective {


  @HostBinding("style.BackgroundColor")
  bgcolor="pink";
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeFontSize('big');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeFontSize('small');
  }

  private changeFontSize(size: string) {
    if (size === 'big') {
      this.el.nativeElement.style.fontSize='50px';
    } else {
      this.el.nativeElement.style.fontSize='30px';
    }
  }
}
