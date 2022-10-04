import { Item } from "../item";

export class CreateItem {
    static readonly type = '[ITEM] Add'

    constructor(public payload: Item){}
}

export class GetAllItems {
  static readonly type = '[ITEM] GetAllItems';
}

export class DeleteItem {
  static readonly type = '[ITEM] Remove'

  constructor(public payload: Item ){}
}

export class EditItem {
  static readonly type = '[ITEM] Edit'

  constructor(public payload: Item ){}
}
