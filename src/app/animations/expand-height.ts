import { animate, state, style, transition, trigger } from "@angular/animations";

export const expandAnimation = trigger('expandAnimation', [
  state('expanded', style({
    height: '*',
    opacity: 1
  })),
  state('collapsed', style({
    height: '0',
    opacity: 0
  })),
  transition('collapsed <=> expanded', animate('300ms ease-in-out'))
]);

export const expandAnimationNoFade = trigger('expandAnimationNoFade', [
  state('expanded', style({
    height: '*',
  })),
  state('collapsed', style({
    height: '0',
  })),
  transition('collapsed <=> expanded', animate('300ms ease-in-out'))
]);