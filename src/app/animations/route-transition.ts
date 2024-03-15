import { animate, query, style, transition, trigger } from "@angular/animations";

const optional = {optional: true};

export const routeFadeInOutAnimation = trigger('routeFadeInOutAnimation', [
  transition('* <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({          
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({opacity: 0})
    ], optional),
    query(':leave', [
      style({opacity: 1}),
      animate('300ms ease-in-out', style({opacity: 0}))
    ], optional),
    query(':enter', [
      style({opacity: 0}),
      animate('300ms ease-in-out', style({opacity: 1}))
    ], optional)
  ])
])