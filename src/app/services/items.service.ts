import {Injectable} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { map, Observable, of } from "rxjs";
import {CreateItem, DeleteItem, EditItem, GetAllItems} from "../actions/app.action";
import {Item} from "../item";
import { ItemState } from "../states/app.state";


@Injectable()
export class ItemsService {

  @Select(ItemState.getItems)items$!: Observable<Item[]>;
  constructor(public store: Store) {
    this.store.dispatch(new GetAllItems());
  }

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

  getItems(): Observable<Item[]> {
    return this.items$; 
  }

  getItem(id: number): Observable<Item | undefined> {
    return this.getItems().pipe(map(items => items.find(i => i.id === id)));
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

