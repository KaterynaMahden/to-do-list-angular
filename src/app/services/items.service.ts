import {Injectable} from "@angular/core";
import { Store } from "@ngxs/store";
import { of } from "rxjs";
import { CreateItem, DeleteItem, EditItem } from "../actions/app.action";
import {Item} from "../item";


@Injectable()
export class ItemsService {

  constructor(public store: Store) {}


  items = this.store.select(state => state.items.items)

  add(description: string){
    const id = Math.floor((Math.random() * 100) + 1);

    const newItem = {
      description: description,
      done: false,
      id: id
    }

    // this.items.unshift(newItem);

    this.store.dispatch(new CreateItem(newItem))
  }

  getItem(id: number) {
    const item = this.items.find(item=>item.id === id)!;
    return of(item)
  }

  edit(item: Item){
    // const itemIndex = this.items.indexOf(item);
    // if (itemIndex < 0) {
    //   throw new Error('Item not found');
    // }

    // this.items[itemIndex] = item;

    this.store.dispatch(new EditItem(item))
  }

  remove(item: Item) {
    // const itemIndex = this.items.indexOf(item)
    // if (itemIndex < 0) {
    //   throw new Error('Item not found');
    // }
    // this.items.splice(this.items.indexOf(item), 1)

    this.store.dispatch(new DeleteItem(item))
  }
}

