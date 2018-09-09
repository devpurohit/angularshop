import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') className = false;

    constructor(el: ElementRef, renderer: Renderer2) {

    }

    @HostListener('mousedown') dropClick(eventData: Event) {
        this.className = !this.className;

    }

}

