import { Component } from '@angular/core';
import {ThemeModeToggleComponent} from "../../single-elements/theme-mode-toggle/theme-mode-toggle.component";
import {SpeedDial} from "primeng/speeddial";
import {LoveButtonComponent} from "../../single-elements/love-button/love-button.component";
import {ValentineFormComponent} from "../../bunito-page-components/valentine-form/valentine-form.component";

@Component({
  selector: 'atom-bunito-page',
  imports: [
    ThemeModeToggleComponent,
    SpeedDial,
    LoveButtonComponent,
    ValentineFormComponent
  ],
  templateUrl: './bunito-page.component.html',
  styleUrl: './bunito-page.component.scss'
})
export class BunitoPageComponent {
  showScreenMask: boolean = false;
  speedDialItems: any[] = [
    {
      label: 'themeToggle',
    },
    {
      label: 'love',
    }
  ]

  onHideSpeedDial() {
    console.log('hide');
    this.showScreenMask = false;
  }

  onShowSpeedDial() {
    this.showScreenMask = true;
  }
}
