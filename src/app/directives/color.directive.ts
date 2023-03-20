import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color')
  @Input()
  color: string;
}
