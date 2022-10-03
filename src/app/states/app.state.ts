import { Item } from "../item";
import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import {CreateItem, DeleteItem, EditItem, GetAllItems} from "../actions/app.action";
import {patch, updateItem} from "@ngxs/store/operators";


export class ItemStateModel {
  items: Item[];
}


@State<ItemStateModel>({
  name: 'item',
  defaults: {
    items: []
  }
})

export class ItemState {

  items=[
    {
      description: 'to do',
      done: false,
      id: 1},
    {
      description: 'to do2',
      done: false,
      id: 2},
    {
      description: 'to do3',
      done: false,
      id: 3},
  ]

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
  remove({getState, setState }: StateContext<ItemStateModel>, { item }:DeleteItem) {
    const state = getState();
    const filteredArray = state.items.filter(item => item !== item);
    setState({
      ...state,
      items: filteredArray
    });
  }


  @Action(EditItem)
  edit(ctx: StateContext<ItemStateModel>, { payload }: EditItem) {
    ctx.setState(
      patch({
        items: updateItem(item=> item.description === payload.description, patch({ description: payload.description }))
      })
    );
  }
}
