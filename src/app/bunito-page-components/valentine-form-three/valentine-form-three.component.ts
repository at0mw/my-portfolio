import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'atom-valentine-form-three',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-three.component.html',
  styleUrl: './valentine-form-three.component.scss'
})
export class ValentineFormThreeComponent {
  @Output() activateCallback = new EventEmitter<number>();

  onNext() {
    // this.activateCallback.emit(3);
  }

  onPrevious() {
    this.activateCallback.emit(2);
  }
}
