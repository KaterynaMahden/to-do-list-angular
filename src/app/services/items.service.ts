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

    this.store.dispatch(new CreateItem(newItem))
  }

  getItems(): Observable<Item[]> {
    return this.items$; 
  }

  getItem(id: number): Observable<Item | undefined> {
    return this.getItems().pipe(map(items => items.find(i => i.id === id)));
  }

  edit(item: Item){
    this.store.dispatch(new EditItem(item))
  }

  remove(item: Item) {
    this.store.dispatch(new DeleteItem(item))
  }
}

