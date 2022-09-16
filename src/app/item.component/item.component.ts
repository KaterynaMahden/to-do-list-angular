import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from "../item";



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})

export class ItemComponent {

  constructor(
    private router: Router ) { }

  
  editable = false;

  @Input() item: Item | any;

  goToItem() {
    const itemId = this.item.id
    this.router.navigate(['/edit', {id: itemId}])
  }

}

