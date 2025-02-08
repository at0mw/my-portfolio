import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'atom-valentine-form-four',
  imports: [
    Button
  ],
  templateUrl: './valentine-form-four.component.html',
  styleUrl: './valentine-form-four.component.scss'
})
export class ValentineFormFourComponent {
  @Input() valentineFormGroup!: FormGroup;
  @Output() activateCallback = new EventEmitter<number>();
  onNext() {
    // this.activateCallback.emit(3);
  }

  onPrevious() {
    this.activateCallback.emit(3);
  }
}
