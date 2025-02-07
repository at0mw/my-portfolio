import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'atom-valentine-form-two',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-two.component.html',
  styleUrl: './valentine-form-two.component.scss'
})
export class ValentineFormTwoComponent {
  @Output() activateCallback = new EventEmitter<number>();

  onNext() {
    this.activateCallback.emit(3);
  }

  onPrevious() {
    this.activateCallback.emit(1);
  }
}
