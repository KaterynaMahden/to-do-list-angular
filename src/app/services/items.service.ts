import {Injectable} from "@angular/core";
import { of } from "rxjs";
import {Item} from "../item";


@Injectable()
export class ItemsService {
  items: Item[] = [
    { description: '1to do', done: true, id: 0 },
    { description: '2to do', done: false, id: 1 },
    { description: '3to do', done: false, id: 2 },
    { description: '4to do', done: false, id: 3 },
  ];

  add(description: string){
    const id = Math.floor((Math.random() * 100) + 1);

    const newItem = {
      description: description,
      done: false,
      id: id
    }

    this.items.unshift(newItem);
  }
  getItem(id: number) {
    const item = this.items.find(item=>item.id === id)!;
    return of(item)
  }

  edit(item: Item){
    const itemIndex = this.items.indexOf(item);
    if (itemIndex < 0) {
      throw new Error('Item not found');
    }

    this.items[itemIndex] = item;
  }

  remove(item: Item) {
    const itemIndex = this.items.indexOf(item)
    if (itemIndex < 0) {
      throw new Error('Item not found');
    }
    this.items.splice(this.items.indexOf(item), 1)
  }
}

