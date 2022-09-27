import { Injectable } from "@angular/core";
import { Action, createSelector, State, StateContext, Store } from "@ngxs/store";
import { Item } from "../item";


export interface ItemsStateModel {
    modal: boolean;
}

export class AllItems {
    static readonly type = '[Items] AllItems';
    constructor(public itemsState: ItemsStateModel,
        private store: Store,
        ) {}
}

// @State<string[]>({
//     name: 'items',
//     defaults: { 
//         itemsAll: []
//     }
// })

@Injectable()
// export class ItemsState {

//     @Action(AllItems) 
//     allItems(ctx: StateContext<ItemsStateModel>, action: AllItems){
//         const state = ctx.getState();
//         ctx.setState({
//             ...state,
//             itemsAll: [
//                 ...state.items,
//                 action.itemsState
//             ]
//         })
//     }
    
// }

export class ItemsState {
    static getItems(item: Item) {
        return createSelector(
            [ItemsState],
            (items:Item[]) => items.filter(item => item.id === item)
        )
    }
}

