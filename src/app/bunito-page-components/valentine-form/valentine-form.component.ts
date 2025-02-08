import {Component} from '@angular/core';
import {Card} from "primeng/card";
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {Button} from "primeng/button";
import {ValentineFormOneComponent} from "../valentine-form-one/valentine-form-one.component";
import {ValentineFormTwoComponent} from "../valentine-form-two/valentine-form-two.component";
import {ValentineFormThreeComponent} from "../valentine-form-three/valentine-form-three.component";
import {ValentineFormFourComponent} from "../valentine-form-four/valentine-form-four.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Steps} from "primeng/steps";

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
    ReactiveFormsModule,
    Steps
  ],
  templateUrl: './valentine-form.component.html',
  styleUrl: './valentine-form.component.scss'
})
export class ValentineFormComponent {
  valentineFormGroup: FormGroup = new FormGroup({});
  formSteps: any[] = [
    {
      label: 'Proposal',
      component: ValentineFormOneComponent
    },
    {
      label: 'Date',
      component: ValentineFormTwoComponent
    },
    {
      label: 'Food',
    },
    {
      label: 'Invitation',
    }
  ]
  activeStep: number = 0;
  constructor() {
    // Setup form
    this.valentineFormGroup.addControl('valentineAcceptance', new FormControl(false, Validators.requiredTrue));
    this.valentineFormGroup.addControl('date', new FormControl(null, Validators.required));
    this.valentineFormGroup.addControl('foodOption', new FormControl(null, Validators.required));
  }

  onChangeStep($event: number) {
    this.activeStep = $event - 1;
  }
}
