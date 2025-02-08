import {Component} from '@angular/core';
import {Card} from "primeng/card";
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {Button} from "primeng/button";
import {ValentineFormOneComponent} from "../valentine-form-one/valentine-form-one.component";
import {ValentineFormTwoComponent} from "../valentine-form-two/valentine-form-two.component";
import {ValentineFormThreeComponent} from "../valentine-form-three/valentine-form-three.component";
import {ValentineFormFourComponent} from "../valentine-form-four/valentine-form-four.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'atom-valentine-form',
  imports: [
    Card,
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    ValentineFormOneComponent,
    ValentineFormTwoComponent,
    ValentineFormThreeComponent,
    ValentineFormFourComponent,
    ReactiveFormsModule
  ],
  templateUrl: './valentine-form.component.html',
  styleUrl: './valentine-form.component.scss'
})
export class ValentineFormComponent {
  valentineFormGroup: FormGroup = new FormGroup({});

  constructor() {
    // Setup form
    this.valentineFormGroup.addControl('valentineAcceptance', new FormControl(false, Validators.requiredTrue));
    // this.valentineFormGroup.addControl('date', new FormControl({}));
    // this.valentineFormGroup.addControl('foodOption', new FormControl({}));
  }
}
