import { Item } from "../item";
import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import {CreateItem, DeleteItem, EditItem, GetAllItems} from "../actions/app.action";
import {patch, updateItem} from "@ngxs/store/operators";


export class ItemStateModel {
  items: Item[] = [];
}


@State<ItemStateModel>({
  name: 'items',
  defaults: {
    items: []
  }
})

export class ItemState {

  @Selector()
  static getItems(state: ItemStateModel) {
    return state.items
  }

  @Action(GetAllItems)
  getAllItems({ patchState }: StateContext<ItemStateModel>, {  }: GetAllItems) {
    patchState({
      items: this.items
    });
  }

  @Action(CreateItem)
  add(ctx:  StateContext<ItemStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: []
    });
  }

  @Action(DeleteItem)
  remove({getState, setState }: StateContext<ItemStateModel>, { payload }:DeleteItem) {
    const state = getState();
    const filteredArray = state.items.filter(item => item.id !== id);
    setState({
      ...state,
      items: filteredArray
    });
  }


  @Action(EditItem)
  edit(ctx: StateContext<ItemStateModel>, { payload }: EditItem) {
    ctx.setState(
      patch({
        items: updateItem(item=> item.id === payload.id, patch({ description: payload.description }))
      })
    );
  }
}
