import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100px)'
    }),
    animate('700ms ease-out', style({opacity: 1, transform: 'none'}))
  ])
])