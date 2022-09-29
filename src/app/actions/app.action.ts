import { Item } from "../item";

export class CreateItem {
    static readonly type = '[ITEM] Add'

    constructor(public payload: Item){}
}

export class DeleteItem {
  static readonly type = '[ITEM] Remove'

  constructor(public payload: Item ){}
}

export class EditItem {
  static readonly type = '[ITEM] Edit'

  constructor(public payload: Item ){}
}

export class Done {
  static readonly type = '[ITEM] Done'

  constructor(public payload: Item ){}
}
