import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";
import {DatePicker} from "primeng/datepicker";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'atom-valentine-form-two',
  imports: [
    Button,
    DatePicker,
    FormsModule
  ],
  templateUrl: './valentine-form-two.component.html',
  styleUrl: './valentine-form-two.component.scss'
})
export class ValentineFormTwoComponent {
  @Output() activateCallback = new EventEmitter<number>();
  date: Date = new Date();
  currentDate: Date = new Date(this.date.getTime() - 6000);

  onNext() {
    this.activateCallback.emit(3);
  }

  onPrevious() {
    this.activateCallback.emit(1);
  }
}
