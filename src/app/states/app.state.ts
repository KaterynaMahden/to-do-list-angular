import { Item } from "../item";
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {CreateItem, DeleteItem, EditItem} from "../actions/app.action";

export class ItemStateModel {
  items: Item[];
}

// Section 3
@State<ItemStateModel>({
  name: 'items',
  defaults: {
    items: [
      { description: '1to do', done: true, id: 0 },
      { description: '2to do', done: false, id: 1 },
      { description: '3to do', done: false, id: 2 },
      { description: '4to do', done: false, id: 3 },
    ]
  }
})

export class ItemState {

  @Selector()
  static getTutorials(state: ItemStateModel) {
    return state.items
  }

  @Action(CreateItem)
  add({getState, patchState }: StateContext<ItemStateModel>, { payload }:CreateItem) {
    const state = getState();
    patchState({
      items: [...state.items, payload]
    })
  }

  @Action(DeleteItem)
  remove({getState, patchState }: StateContext<ItemStateModel>, { payload }:DeleteItem) {
    patchState({
      items: getState().items.filter(a => a.description != payload)
    })
  }

  @Action(EditItem)
  edit({getState, patchState }: StateContext<ItemStateModel>, { payload }:EditItem) {
    patchState({
      items: getState().items.filter(a => a.description)
    })
  }

}
