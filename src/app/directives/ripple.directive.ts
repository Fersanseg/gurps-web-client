import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true
})
export class RippleDirective {
  private targetDiv?: Element;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const container = this.elementRef.nativeElement;
    this.targetDiv = container.querySelector('.linkDiv');
    
    if (!this.targetDiv) return;
    
    const rect = this.targetDiv.getBoundingClientRect();
    const xPos = event.clientX;
    const yPos = event.clientY;

    if (xPos >= rect.left && xPos <= rect.right && yPos >= rect.top && yPos <= rect.bottom) {
      this.createRipple(event);
    }
  }

  private createRipple(event: MouseEvent) {
    const container: any = this.targetDiv;
    const ripple = this.renderer.createElement('div');
    this.renderer.addClass(ripple, 'ripple');
    const diameter = Math.max(container.offsetWidth, container.offsetHeight);
    const radius = diameter / 2;
    const xPos = event.clientX - container.getBoundingClientRect().left;
    const yPos = event.clientY - container.getBoundingClientRect().top;

    this.renderer.setStyle(ripple, 'width', `${diameter}px`);
    this.renderer.setStyle(ripple, 'height', `${diameter}px`);
    this.renderer.setStyle(ripple, 'left', `${xPos - radius}px`);
    this.renderer.setStyle(ripple, 'top', `${yPos - radius}px`);

    this.renderer.appendChild(container, ripple);
    
    ripple.addEventListener('animationend', () => {
      this.renderer.removeChild(container, ripple);
    });
  }
}





// export class RippleDirective {
//   constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

//   @HostListener('click', ['$event'])
//   onClick(event: MouseEvent) {
//     console.log("A")
//     const container = this.elementRef.nativeElement;
//     const ripple = this.renderer.createElement('div');
//     this.renderer.addClass(ripple, 'ripple');
//     const diameter = Math.max(container.offsetWidth, container.offsetHeight);
//     const radius = diameter / 2;
//     const xPos = event.clientX - container.getBoundingClientRect().left;
//     const yPos = event.clientY - container.getBoundingClientRect().top;

//     this.renderer.setStyle(ripple, 'width', `${diameter}px`);
//     this.renderer.setStyle(ripple, 'height', `${diameter}px`);
//     this.renderer.setStyle(ripple, 'left', `${xPos - radius}px`);
//     this.renderer.setStyle(ripple, 'top', `${yPos - radius}px`);

//     this.renderer.appendChild(container, ripple);
    
//     setTimeout(() => {
//       this.renderer.removeChild(container, ripple);
//     }, 500); // Adjust this time to match your animation duration
//   }
// }
