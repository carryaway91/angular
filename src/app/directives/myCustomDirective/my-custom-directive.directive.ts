import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {
  defaultColor: string = "transparent";
  colored: string = 'orange'
  defaultCursor: string = 'pointer';


  // nabindujeme attribut bgColor na premennu color 
  @HostBinding('style.backgroundColor') color: string = this.defaultColor;
  @HostBinding('style.cursor') pointer: string = 'default';

  // funkcia ktora sa spusti po clicku na hostovany element ktory bude mat direktivu
  @HostListener('click') toggleColor() {
    this.color === this.defaultColor ? this.color = this.colored : this.color = this.defaultColor
  }

  @HostListener('mouseenter') goOver() {
    this.pointer = this.defaultCursor
  }

  @HostListener('mouseleave') goOff() {
    this.pointer = 'default'
  }

  constructor() { }


}
