import { Component, Input, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent, RouterOutlet} from '@angular/router';
import {animate, AnimationEvent, keyframes, state, style, transition, trigger} from "@angular/animations";
import { Item } from './item';
import { ItemsService } from './services/items.service';
import { modalAnimation } from './animations';
import { Select, Store } from '@ngxs/store';
import { ItemState } from './states/app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: '#70ecae',
        transform: 'rotate(-135deg)'
      })),

      state('closed', style({
        backgroundColor: '#ec7070',
        transform: 'rotate(-360deg)'
      })),

      transition('open => closed', [
        animate('0.6s ease-out')
      ]),

      transition('closed => open', [
        animate('0.6s ease-in')
      ]),
    ]),
    modalAnimation
  ]
})

export class AppComponent {


  modal = false

  constructor(public router: Router,
     private itemsService: ItemsService,
     private store: Store,) {

      this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.modal = !this.modal
      }
    })
  }

  @Select(ItemState.getItems)items$: Observable<Item[]>;
  
  @Input() item?: Item | null;

  // get items() {
  //   return this.itemsService.items;
  // }

  onClick() {
    if (this.router.url === '') {
      this.modal = true;
      this.router.navigateByUrl('add');
    }
    if (this.router.url === 'add') {
      this.modal = false;
      this.router.navigateByUrl('');
    }
    if (this.router.url === 'edit') {
      this.modal = false;
      this.router.navigateByUrl('');
    }

  }
}

