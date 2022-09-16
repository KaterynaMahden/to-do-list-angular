import {Component} from "@angular/core";

@Component({
  selector: 'app-date-component',
  template: `<div>
    <div class="main">
      <div class="h2">{{today | date:'EEEE, dd'}}</div>
      <div class="h3"> {{today | date:'  LLLL'}}</div>
    </div>
 </div>`,
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  today: number = Date.now();
}
