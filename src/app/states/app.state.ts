import { Item } from "../item";
import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import {CreateItem, DeleteItem, EditItem} from "../actions/app.action";


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

//   @Action(Done)
//   done(
//     ctx: StateContext<ItemStateModel>, 
//       { payload, done }: done
//     ) {
//         ctx.setState(
//             patch({
//                 todoList: edit(
//                   (item: Item[]) => item.id === payload, 
//                   patch({ done: !done })
//                 )
//             })
//         );
//     }


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
      items: getState().items.filter(item => item != payload)
    })
  }

  @Action(EditItem)
  edit({getState, patchState }: StateContext<ItemStateModel>, { payload }:EditItem) {
    patchState({
      items: getState().items.filter(item => item.description)
    })
  }

}
