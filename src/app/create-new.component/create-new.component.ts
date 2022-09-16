import { trigger, state, style, transition, animate } from "@angular/animations";
import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { ChildrenOutletContexts, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { modalAnimation } from "../animations";
import { ItemsService } from "../services/items.service";

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
  animations: [modalAnimation]
})

export class CreateModalComponent {
  
  constructor(private service: ItemsService,
              private router: Router,
              private fb: FormBuilder,
              private store: Store,
              private contexts: ChildrenOutletContexts) { }





  open=false

  
  createItem = this.fb.group({
    editInput: new FormControl('')
  })

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  addNewItem(description: string) {
   
    this.service.add(description)
  
    this.router.navigateByUrl('');

  }
}
