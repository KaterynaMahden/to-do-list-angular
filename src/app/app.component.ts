import { Component, Input, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { Item } from './item';
import { ItemsService } from './services/items.service';
import { modalAnimation } from './animations';
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

export class AppComponent implements OnInit {

 
  @Input() item?: Item | null;

  items: Item[] | undefined;

  modal = false
  
  items$?: Observable<Item[]>;

  constructor(
    public router: Router,
     private itemsService: ItemsService) {

      this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.modal = !this.modal
      }
    })
  }
  
  
  ngOnInit(): void {
    this.items$ = this.itemsService.getItems();
    this.items$?.subscribe(i=>{
      this.items = i;
    }
    )
  }
 

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

