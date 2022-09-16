import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appClickOutside]'
})

export class ClickOutsideDirective {

    @Output()
    outsideClick: EventEmitter<MouseEvent> = new EventEmitter();
  
    @HostListener('document:mousedown', ['$event'])
    onClick(event: MouseEvent): void {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.outsideClick.emit(event);
      }
    }
  
    constructor(private elementRef: ElementRef) {}

}