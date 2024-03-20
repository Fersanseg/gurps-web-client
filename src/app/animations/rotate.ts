import { animate, state, style, transition, trigger } from "@angular/animations";

export const rotateAnimation = trigger('rotateAnimation', [
  state('active', style({
    transform: `rotate({{degrees}}deg)`
  }), {params: {degrees: 0}}),
  state('normal', style({
    transform: 'rotate(0deg)'
  })),
  transition('normal <=> active', animate('300ms ease-in-out'))
]);