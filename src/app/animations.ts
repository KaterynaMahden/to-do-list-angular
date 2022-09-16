import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const modalAnimation =  trigger('routeAnimations',[
  state('open', style({
    bottom: '0em',
    opacity: 1
})),

state('closed', style({
bottom: '-2em',
opacity: 0
})),

transition('AppComponent <=> CreateModalComponent', [
  animate('850ms ease-out')
]),
query (':enter', [
  animate ('850ms',
    style ({ opacity: '0.7', bottom: '0em', }),
  ),
]),
query (':leave', [
  animate ('700ms',
    style ({ opacity: '0.7', top: '2em', }),
  ),
]),
])