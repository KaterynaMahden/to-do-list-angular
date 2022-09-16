import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const modalAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, bottom: '2em', }),
      animate('850ms',
        style({ opacity: 1, bottom: '0em' }),
      ),
    ], { optional: true }),
    query(':leave', [
      style({ opacity: 1, top: '0em', }),
      animate('850ms',
        style({ opacity: 0, top: '2em', }),
      ),
    ], { optional: true }),
  ])
  
])