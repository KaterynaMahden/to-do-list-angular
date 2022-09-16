import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Item } from "../item";
import { ItemsService } from "../services/items.service";


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})

export class EditModalComponent implements OnInit {
  constructor(
    private service: ItemsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getItem();
    this.open = true;
    this.setDefault();
  }

  item?: Item;

  open = false

  updateItem = this.fb.group({
    descriptionField: new FormControl()
  })

  setDefault() {
    let values = {
      descriptionField: this.item?.description
    }
    this.updateItem.setValue(values)
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getItem(id).subscribe(item => this.item = item);
    //rxjs
  }

  editItem(description: string): void {
    if (!this.item) {
      return;
    }

    this.item.description = description;

    this.service.edit(this.item);

    this.router.navigateByUrl('');
    this.open = false
  }

  remove(): void {
    if (!this.item) {
      return;
    }
    this.service.remove(this.item)

    this.router.navigateByUrl('');
    this.open = false
  }
}