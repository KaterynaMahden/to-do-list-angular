import { Injectable } from "@angular/core";

export class ItemsStateModel {
    items: []
}

@State<ItemsStateModel>({
    name: 'itemsstate',
    defaults: {
        items: []
    }
})

@Injectable()
export class AppState {
    constructor(private:)
}