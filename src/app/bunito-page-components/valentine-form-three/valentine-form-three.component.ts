import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'atom-valentine-form-three',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-three.component.html',
  styleUrl: './valentine-form-three.component.scss'
})
export class ValentineFormThreeComponent {
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();

  onNext() {
    this.activateCallback.emit(4);
  }

  onPrevious() {
    this.activateCallback.emit(2);
  }
}
