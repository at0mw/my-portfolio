import {Component, EventEmitter, Output} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'atom-valentine-form-one',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-one.component.html',
  styleUrl: './valentine-form-one.component.scss'
})
export class ValentineFormOneComponent {
  @Output() activateCallback = new EventEmitter<number>();


  onNext() {
    this.activateCallback.emit(2);
  }

  onPrevious() {

  }
}
