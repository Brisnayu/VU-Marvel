import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardStyle]'
})
export class CardStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '30px');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(45deg, #571845 30%, #C70039 79%)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px 0 #FFC300');
  }

}
