import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ItemComponent} from "./item.component/item.component";
import {DateComponent} from "./date.component/date.component";
import {ItemsService} from "./services/items.service";
import {EditModalComponent} from "./edit-modal.component/edit-modal.component";
import { CreateModalComponent } from './create-new.component/create-new.component';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ItemState } from './states/app.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DateComponent,
    EditModalComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ItemState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(), 
    RouterModule.forRoot([
      {path: 'add', component: CreateModalComponent},
      {path: 'edit/:id', component: EditModalComponent},
    ]),
    ClickOutsideModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
