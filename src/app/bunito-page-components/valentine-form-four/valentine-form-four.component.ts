import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'atom-valentine-form-four',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-four.component.html',
  styleUrl: './valentine-form-four.component.scss'
})
export class ValentineFormFourComponent {
  @Output() activateCallback = new EventEmitter<number>();
  onNext() {
    // this.activateCallback.emit(3);
  }

  onPrevious() {
    this.activateCallback.emit(3);
  }
}
